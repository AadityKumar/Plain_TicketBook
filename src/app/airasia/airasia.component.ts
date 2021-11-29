import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-airasia',
  templateUrl: './airasia.component.html',
  styleUrls: ['./airasia.component.css']
})
export class AirasiaComponent implements OnInit {

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
