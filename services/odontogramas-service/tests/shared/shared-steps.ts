import { ApiErrorResponse } from '@libs/shared/presentation/api/api-error.response';
import { TestContext } from '@tests/test-utils/TestContext';
import { CreateOdontogramaTestContext } from '@tests/odontograma/odontograma-shared-steps';
import { DefineStepFunction } from 'jest-cucumber';

export const iReceiveAnErrorWithStatusCode = (
  then: DefineStepFunction,
  ctx: TestContext<CreateOdontogramaTestContext>,
): void => {
  then(
    /^I receive an error "(.*)" with status code (\d+)$/,
    async (errorMessage: string, statusCode: string) => {
      const apiError = ctx.latestResponse as ApiErrorResponse;
      expect(apiError.statusCode).toBe(parseInt(statusCode));
      expect(apiError.error).toBe(errorMessage);
    },
  );
}; 