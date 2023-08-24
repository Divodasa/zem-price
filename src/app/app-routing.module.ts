import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtiComponent } from './bti/bti.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DealsComponent } from './deals/deals.component';
import { GoalComponent } from './goal/goal.component';
import { LandComponent } from './land/land.component';
import { LicenseComponent } from './license/license.component';
import { MainComponent } from './main/main.component';
import { PriceComponent } from './price/price.component';
import { RegisterComponent } from './register/register.component';
import { WorksConcreteComponent } from './works-concrete/works-concrete.component';
import { WorksHouseComponent } from './works-house/works-house.component';
import { WorksRefundComponent } from './works-refund/works-refund.component';
import { WorksVillageComponent } from './works-village/works-village.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'works-ground', component: WorksComponent },
  { path: 'works-refund', component: WorksRefundComponent },
  { path: 'works-concrete', component: WorksConcreteComponent },
  { path: 'works-house', component: WorksHouseComponent },
  { path: 'works-village', component: WorksVillageComponent },
  { path: 'land', component: LandComponent },
  { path: 'bti', component: BtiComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'price', component: PriceComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'goal', component: GoalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
