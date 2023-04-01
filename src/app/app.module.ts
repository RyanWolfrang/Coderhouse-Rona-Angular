import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosComponent } from './validaciones/formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
