import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-model',
  templateUrl: './test-ng-model.component.html',
  styleUrls: ['./test-ng-model.component.css']
})
export class TestNgModelComponent implements OnInit {

  constructor() { }

  someString: string = "";

  ngOnInit() {
  }

}