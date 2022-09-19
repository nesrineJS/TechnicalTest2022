import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-launchs-list',
  templateUrl: './launchs-list.component.html',
  styleUrls: ['./launchs-list.component.css'],
})
export class LaunchsListComponent implements OnInit {
  apiUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50';
  loading: boolean = true;
  launchs: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getLaunchList();
  }
  //get the next 50's launchs
  getLaunchList() {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.loading = false;
        this.launchs = data.results;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
  //navigate to launch details
  getLaunchDetails(id: any) {
    this.router.navigate(['/launch', id]);
  }
}
