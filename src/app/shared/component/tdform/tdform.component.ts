import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcontactModeArr, IuserInfo } from '../../models/tdform.interface';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactModeArr : Array<IcontactModeArr> = [
    {
      moc: 'Email', id : 1
    },
    {
      moc : 'Mobile' , id: 2
    }
  ]

  userInfo : IuserInfo = {
    "username":"kedarj",
    "email":"jk123@gmail.com",
    "secretQuestion" : "favouriteBook",
    "ans" : "helping Hands",
    "subscribed" : true,
    "modeOfContact" : "Mobile"
  }

  @ViewChild('signUp') signUp !: NgForm

  onSignUp(){
    console.log(this.signUp)
    console.log(this.signUp.value)
    this.signUp.reset()
  }

  onEditUser(){
    this.signUp.form.patchValue(this.userInfo)
  }

}
