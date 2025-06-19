import { DefineStepFunction } from 'jest-cucumber';
import { TestContext } from 'tests/test-utils/TestContext';
import { ApiClient } from '@tests/test-utils/ApiClient';

export type CreateOdontogramaTestContext = {
  pacienteId: string;
};

export const givenAPacienteId = (
  given: DefineStepFunction,
  ctx: TestContext<CreateOdontogramaTestContext>,
): void => {
  given(/^a paciente with ID "(.*)"$/, (pacienteId: string) => {
    ctx.context.pacienteId = pacienteId;
  });
};

export const iSendARequestToCreateAnOdontograma = (
  when: DefineStepFunction,
  ctx: TestContext<CreateOdontogramaTestContext>,
): void => {
  when('I send a request to create an odontograma', async () => {
    const response = await new ApiClient().createOdontograma({
      pacienteId: ctx.context.pacienteId,
    });
    ctx.latestResponse = response;
  });
}; 