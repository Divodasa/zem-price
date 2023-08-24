import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WorksComponent } from './works/works.component';
import { LandComponent } from './land/land.component';
import { BtiComponent } from './bti/bti.component';
import { DealsComponent } from './deals/deals.component';
import { RegisterComponent } from './register/register.component';
import { PriceComponent } from './price/price.component';
import { LicenseComponent } from './license/license.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WorksRefundComponent } from './works-refund/works-refund.component';
import { WorksConcreteComponent } from './works-concrete/works-concrete.component';
import { WorksHouseComponent } from './works-house/works-house.component';
import { WorksVillageComponent } from './works-village/works-village.component';
import { GoalComponent } from './goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WorksComponent,
    LandComponent,
    BtiComponent,
    DealsComponent,
    RegisterComponent,
    PriceComponent,
    LicenseComponent,
    ContactsComponent,
    WorksRefundComponent,
    WorksConcreteComponent,
    WorksHouseComponent,
    WorksVillageComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
