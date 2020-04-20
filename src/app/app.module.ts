import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SnackbarTemplateComponent } from './snackbar-template/snackbar-template.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [AppComponent, SnackbarTemplateComponent, SnackbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSnackBarModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // define custom component using the SnackbarComponent
    const custom = createCustomElement(SnackbarComponent, { injector: injector });
    // define custom component's tag
    customElements.define('app-snackbar', custom);
  }
  ngDoBootstrap() { }
}
