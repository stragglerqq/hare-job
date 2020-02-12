import { filter, flatMap, reduce } from 'rxjs/operators';
import { TranslateLoader } from '@ngx-translate/core';
import { Translation } from '@core/i18n/translation.model';
import { from, Observable } from 'rxjs';
import { TranslationService } from '@core/i18n/translation.service';

interface Translate {
  [key: string]: Translation['translation'];
}

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private translationService: TranslationService) {}

  getTranslation(lang): Observable<{ [key: string]: string }> {
    return this.translationService.getTranslations(lang).pipe(
      flatMap(from),
      filter((translation: Translation) => !!translation.translation),
      reduce((acc: Translate, translation: Translation) => {
        acc[translation.key] = translation.translation;
        return acc;
      }, {}),
    );
  }
}
