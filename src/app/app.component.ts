import { Component, OnInit } from '@angular/core';
import{UsersdataService} from './services/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fetchapi';
  users:any;
  constructor(private userdata:UsersdataService){}
  
 public getAll() {
this.userdata.users().subscribe((data)=>{
 // console.warn("data",data);
  this.users=data;
  
})
  }
//ngOnInit() {
 //this.getAll();
//}


//onClick() {
 // this.getAll()
 // }
  



    

  //callFunction(event, post){

   // console.log(post);

 //}

   

  clickFunction() {
    
  //alert("clicked me!");
this.getAll()
  }

}
 