import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _helloService: HelloService) {}
  ngOnInit() {
    this._helloService
      .getUsers()
      .subscribe(
        data => (this.employees = data),
        error => (this.errorMsg = error)
      );
  }
}
