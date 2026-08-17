import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseException } from '../custom-exceptions/base-exception';
import { Response } from 'express';
import { I18nService, I18nValidationException } from 'nestjs-i18n';
import { formatInputValidationErrors } from '../input-validation/format-input-validation-errors';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  constructor(private readonly I18nService: I18nService) {}
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof BaseException) {
      return response.status(exception.status).send({
        errors: exception.formatError(),
      });
    }

    if (exception instanceof I18nValidationException) {
      const formattedErrors = formatInputValidationErrors(
        exception.errors,
        this.I18nService,
        host,
      );

      return response.status(400).send({ errors: formattedErrors });
    }

    response.status(500).json({
      errors: [{ message: 'Internal server error' }],
    });
  }
}
