import { BaseException } from './base-exception';

export class BadRequestException extends BaseException {
  status = 400;

  constructor(message: string) {
    super(message);
  }
}
