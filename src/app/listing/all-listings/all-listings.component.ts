import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserveService } from 'src/app/user/service/userserve.service';
import { Listing } from '../model/listing';
import { ListingservService } from '../service/listingserv.service';

@Component({
  selector: 'app-all-listings',
  templateUrl: './all-listings.component.html',
  styleUrls: ['./all-listings.component.css']
})
export class AllListingsComponent implements OnInit {

  listings$!:Observable<Listing[]>
  constructor(private listingservice:ListingservService,private route:ActivatedRoute,private router:Router,public userservice:UserserveService) { }
id:any
onelisting:any
listing:any
// editlistingform=new FormGroup({
//   title:new FormControl("",Validators.pattern("^/[a-z]/$")),
//   price:new FormControl("",Validators.pattern("^/[0-9]/$")),
//   locality:new FormControl("",Validators.pattern("^/[a-z]/$")),
//   details:new FormControl("",Validators.pattern("^/[a-z]/$")),
// })
login:any
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id")
    this.listings$=this.listingservice.getlistings()
  
    
  }

  // editlisting(id:any){

  //   this.listingservice.editlisting(this.editlistingform.value,id).subscribe(res=>{
  //     this.editlistingform.reset();
  //   })
    
  // }
  removelisting(id:any){
    this.listingservice.deletelisting(id).subscribe({
      next :()=>{
        this.listings$=this.listingservice.getlistings()
      }
    })
  
    // this.router.navigate(["/listings"])
}


}
