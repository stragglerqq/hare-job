import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { TechnologyDto } from '@core/technology/interface';
import { TechnologyStore } from '@core/technology/state/technology.store';
import { Technology, createTechnology } from '@core/technology/state/technology.model';
import { HttpService } from '@core/services/http.service';

@Injectable({ providedIn: 'root' })
export class TechnologyService {
  private readonly URL: string = 'technologies';

  constructor(private readonly _technologyStore: TechnologyStore,
              private readonly http: HttpService) {
  }

  getAll(): Observable<Technology[]> {
    return this.http.get<TechnologyDto[]>(this.URL).pipe(
      map((technologyDtos: TechnologyDto[]) => technologyDtos.map(createTechnology)),
      tap((technologies: Technology[]) => this._technologyStore.set(technologies)));
  }
}
