import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class AppModule {}
