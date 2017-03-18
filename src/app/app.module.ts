import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SchemaFormModule, WidgetRegistry } from 'angular2-schema-form';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { MdlWidgetRegistry } from './registry';
import { MdlStringWidget } from './string';

@NgModule({
  declarations: [
    AppComponent,
    MdlStringWidget,
  ],
  imports: [
    SchemaFormModule,
    MdlModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  entryComponents: [
    MdlStringWidget,
  ],
  providers: [{provide: WidgetRegistry, useClass: MdlWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule { }
