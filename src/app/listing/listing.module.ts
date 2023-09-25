import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingsComponent } from './all-listings/all-listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HostListener } from "@angular/core";


@NgModule({
  declarations: [
    AllListingsComponent,
    ListingDetailComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
