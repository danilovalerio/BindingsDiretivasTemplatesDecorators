import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPropertyBindingComponent } from './event-property-binding/event-property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { AttributeBindingCssClassComponent } from './attribute-binding-css-class/attribute-binding-css-class.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPropertyBindingComponent,
    AttributeBindingComponent,
    AttributeBindingCssClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
