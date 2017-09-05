import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
  id: string;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  	this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

}
