import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public employees = [];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getEmployees().subscribe(data => (this.employees = data));
  }
}
