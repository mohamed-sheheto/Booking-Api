import { BaseException } from './base-exception';

export class ForbiddenException extends BaseException {
  status = 403;

  constructor(message: string) {
    super(message);
  }
}
