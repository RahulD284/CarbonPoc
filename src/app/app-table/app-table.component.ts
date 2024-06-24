import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit() {
    if (!this.model) {
      this.model = new TableModel();
      this.model.header = [
        new TableHeaderItem({ data: 'Name' }),
        new TableHeaderItem({ data: 'Age' }),
        new TableHeaderItem({ data: 'Role' })
      ];
      this.model.data = [
        [new TableItem({ data: 'John Doe' }), new TableItem({ data: 28 }), new TableItem({ data: 'Developer' })],
        [new TableItem({ data: 'Jane Smith' }), new TableItem({ data: 34 }), new TableItem({ data: 'Designer' })],
        [new TableItem({ data: 'Samuel Green' }), new TableItem({ data: 45 }), new TableItem({ data: 'Manager' })]
      ];
    }
  }
  onRowClick(row: any) {
    // Handle row click event here
    console.log('Row clicked:', row);
    // You can navigate to another page or perform any action based on the clicked row
  }
}
