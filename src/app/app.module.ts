import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ToastComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // define custom component using the HelloWorldComponent
    const custom = createCustomElement(ToastComponent, { injector: injector });
    // define custom component's tag
    customElements.define('app-toast', custom);
  }
  
  ngDoBootstrap() { }
}
