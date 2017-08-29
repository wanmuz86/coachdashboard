import { Component } from '@angular/core';
import { HttpService } from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Dashboard';
  coaches 
  newcoach = {
  	name: '',
  	description:'',
  	image_url:''
  }
  constructor(public httpService : HttpService) { 

this.httpService.getCoaches()
  .subscribe(data => {
    console.log(data)
    this.coaches = data
  })

 }
 saveCoach(newcoach){
this.httpService.addCoach(newcoach)
  .subscribe(data => {
    console.log(data)

    this.coaches.push(newcoach)
    this.newcoach = {
    name: '',
    description:'',
    image_url:''
  } 
  })
}
}
