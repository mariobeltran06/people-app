import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LabelsPaginator } from 'src/app/modules/core/models/LabelsPaginator';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-list-people',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: LabelsPaginator }],
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss'],
})
export class ListPeopleComponent {
  @Input() listPeople: Person[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'name',
    'last_name',
    'age',
    'email',
    'address',
  ];
  dataSource!: MatTableDataSource<Person>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.listPeople);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
