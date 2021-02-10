import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ZapatillaDetailComponent } from './zapatilla-detail/zapatilla-detail.component';
import { ZapatillaEditComponent } from './zapatilla-edit/zapatilla-edit.component';
import { ZapatillaItemComponent } from './zapatilla-item/zapatilla-item.component';
import { ZapatillaNewComponent } from './zapatilla-new/zapatilla-new.component';
import { ZapatillaService } from './shared/zapatilla.service';
import { HttpClientModule } from '@angular/common/http';
import { ZapatillaData } from './shared/zapatilla-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ZapatillaDetailComponent,
    ZapatillaEditComponent,
    ZapatillaItemComponent,
    ZapatillaNewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(ZapatillaData)
  ],
  providers: [ZapatillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
