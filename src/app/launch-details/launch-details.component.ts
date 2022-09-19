import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  apiUrl = 'https://ll.thespacedevs.com/2.2.0/launch/';
  loading: boolean = true;
  launch:any;
  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.getLaunchDetails()
  }

// get details of the target launch
  getLaunchDetails(){
    this.http.get<any>(this.apiUrl+this.activatedRoute.snapshot.params['id'])
    .subscribe(
       (data) => {
         this.loading = false;
         this.launch = data;
       },
       (err) => {
         this.loading = false;

       }
     )
     ;
  }
}
