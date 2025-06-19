import { CreatePacienteRequestDto } from '@src/presentation/http/commands/create-paciente.request.dto';
import { DefineStepFunction } from 'jest-cucumber';
import { TestContext } from '@tests/test-utils/TestContext';
import { ApiClient } from '@tests/test-utils/ApiClient';

export type CreatePacienteTestContext = {
  createPacienteDto: CreatePacienteRequestDto;
};

export const givenPacienteProfileData = (
  given: DefineStepFunction,
  ctx: TestContext<CreatePacienteTestContext>,
): void => {
  given(/^paciente profile data$/, (table: CreatePacienteRequestDto[]) => {
    ctx.context.createPacienteDto = table[0];
  });
};

export const iSendARequestToCreateAPaciente = (
  when: DefineStepFunction,
  ctx: TestContext<CreatePacienteTestContext>,
): void => {
  when('I send a request to create a paciente', async () => {
    const response = await new ApiClient().createPaciente(
      ctx.context.createPacienteDto,
    );
    ctx.latestResponse = response;
  });
}; 