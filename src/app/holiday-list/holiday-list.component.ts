import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/HolidayService';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'status'];
  holidays = new MatTableDataSource<any>();

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getHolidays().subscribe(data => {
      this.holidays = data;
    });
  }
}