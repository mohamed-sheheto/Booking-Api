import { BaseException } from './base-exception';

export class NotFoundException extends BaseException {
  status = 404;

  constructor(message: string) {
    super(message);
  }
}
