import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { environment } from '@env/environment';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): void {
    if (environment.missingTranslationLogger) {
      console.warn(`Missing translation for '${params.key}' in '${params.translateService.currentLang}' language`);
    }
  }
}
