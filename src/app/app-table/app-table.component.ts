import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {
  @Input() model: TableModel | any;
  @Input() stickyHeader = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() skeleton = false;
  @Input() enableSingleSelect = false;
  @Input() showSelectionColumn = false;
  @Input() striped = false;
  @Input() sortable = false;
  @Input() isDataGrid = false;

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    if (!this.model) {
      this.model = new TableModel();
    }
    this.loadTableData();
  }
  loadTableData() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      // Load header data
      this.model.header = data.header.map((header: string) => new TableHeaderItem({ data: header }));

      // Load row data
      this.model.data = data.data.map((row: any[]) => row.map(item => new TableItem({ data: item })));
    });
  }
  onRowClick(row: any) {
    // Handle row click event here
    console.log('Row clicked:', row);
    // You can navigate to another page or perform any action based on the clicked row
  }
}
