import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModel, TableItem, TableHeaderItem, PaginationModel } from 'carbon-components-angular';

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
  @Input() showPageInput = true;
  @Input() enableSingleSelect = false;
  @Input() showSelectionColumn = false;
  @Input() striped = false;
  @Input() sortable = false;
  @Input() isDataGrid = false;
  fullData: TableItem[][] = [];
  pageData: TableItem[][] = [];
  paginationModel = new PaginationModel();
  pageSize = 10;
  currentPage = 1;


  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.loadTableData();
  }
  loadTableData() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      
      this.model.header = data.header.map((header: string) => new TableHeaderItem({ data: header }));

      this.fullData = data.data.map((row: any[]) => row.map(item => new TableItem({ data: item })));
      this.paginationModel.totalDataLength = this.fullData.length;
      this.updatePage();
    });
  }
  updatePage() {
    this.pageData = this.fullData.slice(this.currentPage * 10 - 10, this.currentPage * 10);
    this.model.data = this.pageData;
    console.log('Page data:', this.pageData);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.updatePage();
    console.log("event from pageChange",event)
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.pageSize;
    this.currentPage = 1;
    this.updatePage();
    console.log("event from onPageSizeChange",event)
  }
  selectPage(page: any) {
		this.currentPage = page;
    this.updatePage();
    console.log("page from selectPage",page)
	}
}
