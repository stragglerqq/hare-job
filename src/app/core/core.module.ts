import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@env/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomMissingTranslationHandler, CustomTranslateLoader, TranslationService } from '@core/i18n';


@NgModule({
  imports: [
    CommonModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({
      name: 'Hare jobs',
      maxAge: 100, // maximum allowed actions to be stored in the history tree
      actionsBlacklist: ['Update scales']
    }),
    AkitaNgRouterStoreModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [TranslationService],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
      useDefaultLang: true,
    }),
  ],
  providers: [

  ],
  exports: [
    TranslateModule,
  ],
})
// tslint:disable-next-line:no-unnecessary-class
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
