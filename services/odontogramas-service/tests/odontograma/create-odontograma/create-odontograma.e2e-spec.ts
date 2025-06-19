import { defineFeature, loadFeature } from 'jest-cucumber';
import { getConnectionPool } from '../../setup/jestSetupAfterEnv';
import { OdontogramaResponseDto } from '@src/presentation/dtos/odontograma.response.dto';
import { DatabasePool, sql } from 'slonik';
import { TestContext } from '@tests/test-utils/TestContext';
import { IdResponse } from '@libs/shared/presentation/api/id.response.dto';
import {
  CreateOdontogramaTestContext,
  givenAPacienteId,
  iSendARequestToCreateAnOdontograma,
} from '../odontograma-shared-steps';
import { ApiClient } from '@tests/test-utils/ApiClient';
import { iReceiveAnErrorWithStatusCode } from '@tests/shared/shared-steps';

const feature = loadFeature('tests/odontograma/create-odontograma/create-odontograma.feature');

defineFeature(feature, (test) => {
  let pool: DatabasePool;
  const apiClient = new ApiClient();

  beforeAll(() => {
    pool = getConnectionPool();
  });

  afterEach(async () => {
    await pool.query(sql`TRUNCATE "odontogramas"`);
  });

  test('I can create an odontograma for a paciente', ({ given, when, then, and }) => {
    const ctx = new TestContext<CreateOdontogramaTestContext>();

    givenAPacienteId(given, ctx);

    iSendARequestToCreateAnOdontograma(when, ctx);

    then('I receive my odontograma ID', () => {
      const response = ctx.latestResponse as IdResponse;
      expect(typeof response.id).toBe('string');
    });

    and('I can find the odontograma by paciente ID', async () => {
      const response = ctx.latestResponse as IdResponse;
      const odontograma = await apiClient.findOdontogramaByPaciente(ctx.context.pacienteId);

      expect(odontograma.id).toBe(response.id);
    });
  });

  test('I try to create an odontograma with invalid data', ({ given, when, then }) => {
    const ctx = new TestContext<CreateOdontogramaTestContext>();

    givenAPacienteId(given, ctx);

    iSendARequestToCreateAnOdontograma(when, ctx);

    iReceiveAnErrorWithStatusCode(then, ctx);
  });
}); 