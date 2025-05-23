import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<h1>{{ message }}</h1>',
})
export class AppComponent implements OnInit {
  message = 'Loading...';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any>('http://localhost:8000/index.php').subscribe(data => {
      this.message = data.message;
    });
  }
}
