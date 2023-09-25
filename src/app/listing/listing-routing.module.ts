import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AllListingsComponent } from './all-listings/all-listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

const routes: Routes = [
  {path:"",component:AllListingsComponent},

{path:"Addlisting",component:AddListingComponent,canActivate:[AuthGuard]},
{path:":id",component:ListingDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
