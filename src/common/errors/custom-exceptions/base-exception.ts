import { errorResponse } from '../error-response.interface';

export abstract class BaseException extends Error {
  abstract status: number;

  protected constructor(message: string) {
    super(message);
  }

  formatError(): errorResponse[] {
    return [{ message: this.message }];
  }
}
