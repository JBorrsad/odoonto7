import { defineFeature, loadFeature } from 'jest-cucumber';
import { getConnectionPool } from '@tests/setup/jestSetupAfterEnv';
import { PacienteResponseDto } from '@src/presentation/http/dtos/paciente.response.dto';
import { DatabasePool, sql } from 'slonik';
import { TestContext } from '@tests/test-utils/TestContext';
import { IdResponse } from '@odoonto7/shared/presentation/api/id.response.dto';
import {
  CreatePacienteTestContext,
  givenPacienteProfileData,
  iSendARequestToCreateAPaciente,
} from '@tests/paciente/paciente-shared-steps';
import { ApiClient } from '@tests/test-utils/ApiClient';
import { iReceiveAnErrorWithStatusCode } from '@tests/shared/shared-steps';

const feature = loadFeature('tests/paciente/create-paciente/create-paciente.feature');

defineFeature(feature, (test) => {
  let pool: DatabasePool;
  const apiClient = new ApiClient();

  beforeAll(() => {
    pool = getConnectionPool();
  });

  afterEach(async () => {
    await pool.query(sql`TRUNCATE "pacientes"`);
  });

  test('I can create a paciente', ({ given, when, then, and }) => {
    const ctx = new TestContext<CreatePacienteTestContext>();

    givenPacienteProfileData(given, ctx);

    iSendARequestToCreateAPaciente(when, ctx);

    then('I receive my paciente ID', () => {
      const response = ctx.latestResponse as IdResponse;
      expect(typeof response.id).toBe('string');
    });

    and('I can see my paciente in a list of all pacientes', async () => {
      const res = await apiClient.findAllPacientes();
      const response = ctx.latestResponse as IdResponse;

      expect(
        res.data.some((item: PacienteResponseDto) => item.id === response.id),
      ).toBe(true);
    });
  });

  test('I try to create a paciente with invalid data', ({ given, when, then }) => {
    const ctx = new TestContext<CreatePacienteTestContext>();

    givenPacienteProfileData(given, ctx);

    iSendARequestToCreateAPaciente(when, ctx);

    iReceiveAnErrorWithStatusCode(then, ctx);
  });
}); 