import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
   /* SettingsService,{
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: { getLocale: () => any; }) => settingsService.getLocale()
    }*/
   /*provide: LOCALE_ID,
    useValue: 'pt-BR'*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
