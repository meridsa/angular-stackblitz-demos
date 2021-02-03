import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@ng-stack/forms';
import { Address } from './address.model';
import { Person } from './person.model';

@Component({
  selector: 'app-ng-stack-test',
  templateUrl: './ng-stack-test.component.html',
  styleUrls: ['./ng-stack-test.component.css']
})
export class NgStackTestComponent implements OnInit {

  personForm: FormGroup<Person>;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.personForm = new FormGroup<Person>({
      name: new FormControl(''),
      dob: new FormControl(''),
      address: new FormGroup<Address>({
        street: new FormControl(''),
        
      });
    });
  }

}