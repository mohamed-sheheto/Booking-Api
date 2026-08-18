import { ValidationError } from 'class-validator';
import { errorResponse } from '../error-response.interface';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { ArgumentsHost } from '@nestjs/common';

export function formatInputValidationErrors(
  errors: ValidationError[],
  i18n: I18nService,
  host: ArgumentsHost,
): errorResponse[] {
  const lang = I18nContext.current(host)?.lang || 'en';

  return errors
    .map((error: ValidationError) => {
      const constraints = error.constraints ?? {};
      const messages: string[] = Object.values(constraints);

      return messages.map((message: string): errorResponse => {
        // Parse translation key from format: "key|{args}" or just "key"
        const [translationKey, argsJson] = message.split('|');
        let translatedMessage: string;

        try {
          const args = argsJson ? JSON.parse(argsJson) : {};
          translatedMessage = i18n.translate(translationKey, {
            lang,
            args,
          });
        } catch (e) {
          translatedMessage = message;
        }

        return {
          field: error.property,
          message: translatedMessage,
        };
      });
    })
    .flat();
}
