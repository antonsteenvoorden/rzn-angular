import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-edit-my-password',
  templateUrl: 'edit-my-password.component.html',
  styleUrls: ['edit-my-password.component.css']
})
export class EditMyPasswordComponent implements OnInit {
  password:string;
  newPassword:string;
  repeatPassword:string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  updatePassword(){
    let data = {
      password:this.password,
      newPassword:this.newPassword,
      repeatPassword:this.repeatPassword
    };

    this.api.put('travellers', data);
  }
}
