import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Translation } from '@core/i18n/translation.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private readonly http: HttpClient) { }

  getTranslations(lang: string): Observable<Translation[]> {
    return this.http.get<Translation[]>(`/assets/i18n/${lang}.json`);
  }
}
