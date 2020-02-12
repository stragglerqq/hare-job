import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { TechnologyDto } from '@core/technology/interface';
import { TechnologyStore } from '@core/technology/state/technology.store';
import { Technology, createTechnology } from '@core/technology/state/technology.model';

@Injectable({ providedIn: 'root' })
export class TechnologyService {
  private readonly URL: string = '/api/v1/technologies';

  constructor(private readonly _technologyStore: TechnologyStore,
              private readonly http: HttpClient) {
  }

  getAll(): Observable<Technology[]> {
    return this.http.get<TechnologyDto[]>(this.URL).pipe(
      map((technologyDtos: TechnologyDto[]) => technologyDtos.map(createTechnology)),
      tap((categories: Technology[]) => this._technologyStore.set(categories)));
  }
}
