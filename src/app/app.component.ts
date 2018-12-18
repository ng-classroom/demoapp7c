import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'demoapp7c';
  user: any;

  constructor(
    protected myService: MyServiceService
  ) {

  }

  ngOnInit() {
    this.myService.getPerson().subscribe(
      (response) => {
        this.user = response.results;
      }
    );
  }
}
