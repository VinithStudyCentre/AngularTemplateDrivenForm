import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Data/user-info';

@Component({
  selector: 'app-pmt',
  templateUrl: './pmt.component.html',
  styleUrls: ['./pmt.component.css']
})
export class PmtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OriginalUserInfo:UserInfo={

    Address:null,
    City:"0",
    Gender:null,
    Password:null,
    candidateEmail:null,
    candidateName:null,
    emailSubscription:null


  };

  UserInfo:UserInfo={
    ...this.OriginalUserInfo
  };



}
