import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollAnimationDirective } from 'src/assets/directives/scrollAnimation.directive';

@NgModule({
  declarations: [AppComponent, ScrollAnimationDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
