import { Test, TestingModuleBuilder, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createPool, DatabasePool } from 'slonik';
import * as request from 'supertest';
import { ValidationPipe } from '@nestjs/common';

export class TestServer {
  constructor(
    public readonly serverApplication: NestExpressApplication,
    public readonly testingModule: TestingModule,
  ) {}

  public static async new(
    testingModuleBuilder: TestingModuleBuilder,
  ): Promise<TestServer> {
    const testingModule: TestingModule = await testingModuleBuilder.compile();

    const app: NestExpressApplication = testingModule.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({ transform: true, whitelist: true }),
    );

    app.enableShutdownHooks();

    await app.init();

    return new TestServer(app, testingModule);
  }
}

let testServer: TestServer;
let pool: DatabasePool;

export async function generateTestingApplication(): Promise<{
  testServer: TestServer;
}> {
  const testServer = await TestServer.new(
    Test.createTestingModule({
      imports: [AppModule],
    }),
  );

  return {
    testServer,
  };
}

export function getTestServer(): TestServer {
  return testServer;
}

export function getConnectionPool(): DatabasePool {
  return pool;
}

export function getHttpServer(): request.SuperTest<request.Test> {
  const testServer = getTestServer();
  const httpServer = request(testServer.serverApplication.getHttpServer());

  return httpServer;
}

beforeAll(async (): Promise<void> => {
  ({ testServer } = await generateTestingApplication());
  pool = await createPool(process.env.DATABASE_URL || 'postgresql://test:test@localhost:5432/test');
});

afterAll(async (): Promise<void> => {
  await pool.end();
  testServer.serverApplication.close();
}); 