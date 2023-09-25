import { Component, OnInit } from '@angular/core';
import { UserserveService } from '../user/service/userserve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userservice:UserserveService) { }

  ngOnInit(): void {
  }


}
