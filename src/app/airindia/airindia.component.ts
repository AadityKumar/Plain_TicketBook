import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-airindia',
  templateUrl: './airindia.component.html',
  styleUrls: ['./airindia.component.css']
})
export class AirindiaComponent implements OnInit {

  constructor(public authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  employeeName=""
  employeeAge=""
  employeeAddress=""
   
  CreateRecord(){
    let Record={}
    Record['from']=this.employeeName
    Record['seat']=this.employeeAge
    Record['destination']=this.employeeAddress
    this.authservice.createEmployee(Record).then(res =>{
      alert("Your Respond Stored Sucessfully")
      this.employeeAddress=""
      this.employeeAge=undefined
      this.employeeName=""
    })
     
    }
}
