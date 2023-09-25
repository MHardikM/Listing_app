import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingservService } from '../service/listingserv.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  listingform=new FormGroup({
    title:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    locality:new FormControl("",[Validators.required]),
    details:new FormControl("",[Validators.required]),
  })

  constructor(private listingservice:ListingservService,private router:Router,private http:HttpClient) { }
  ngOnInit(): void {
  }
  token99:any=localStorage.getItem("token")
 private httpopt={
    headers:new HttpHeaders().set("Content-Type","application/json").set("auth-token",this.token99)
  }
 newlisting(){
  if(this.listingform.valid){
 
    // this.http.post<any>("http://localhost:4000/Addlisting",this.listingform.value)
    // this.router.navigate(["/listings"])
    this.listingservice.addlisting(this.listingform.value).subscribe(res=>{
      this.listingform.reset();
       this.router.navigate(["/listings"])
    })
  }
 }



// public openDocumentSaveDialog(): void {
//     const documentSaveDialogRef = this.documentSaveDialog.open(DocumentSaveDialogComponent, {
//         width: '600px',
//         height: '200px',
//         disableClose: true,
//         autoFocus: false,
//         data: null
//     });

//     documentSaveDialogRef.afterClosed().subscribe(result => {
//         this.closeMenu.emit()
//     });
// } 
}
