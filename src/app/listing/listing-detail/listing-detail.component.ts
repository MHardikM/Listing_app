import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserserveService } from 'src/app/user/service/userserve.service';
import { Listing } from '../model/listing';
import { ListingservService } from '../service/listingserv.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
id:any
listing!:Listing
listingsub$!:Subscription
showform!:boolean

editlistingform=new FormGroup({
  title:new FormControl("",[Validators.required]),
  price:new FormControl("",[Validators.required]),
  locality:new FormControl("",[Validators.required]),
  details:new FormControl("",[Validators.required]),

})

  constructor(private listingservice:ListingservService,public userservice:UserserveService,
    private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    this.listingsub$=this.listingservice.getlistingdetail(this.id).subscribe(listing=>{
      this.listing =listing
    })
  }
  editlisting(){
    this.id=this.route.snapshot.paramMap.get("id");
    if(this.editlistingform.valid){
      this.listingservice.editlisting(this.editlistingform.value,this.id).subscribe(res=>{
        this.editlistingform.reset();
        this.router.navigate(["/listings"])
      })
    }

  }
//   @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
//     window.alert("are you sure ?")

// }

  // removelisting(){
  //   this.id=this.route.snapshot.paramMap.get("id");
  //   this.listingservice.deletelisting(this.id).subscribe(res=>{
  //     })
  //     this.router.navigate(["/listings"])
  // }
  showedit(){
    this.showform=!this.showform

  }

}
