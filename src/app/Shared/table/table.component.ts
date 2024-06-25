import { Component, Input, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
//import tabledata from "../../../assets/tabledata.json";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() model = new TableModel();
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showSelectionColumn = false;
  @Input() enableSingleSelect = false;
  @Input() striped = true;
  @Input() sortable = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() ariaLabelledby = "table";
  @Input() ariaDescribedby = "table";
  @Input() itemsPerPageOptions = [10, 20, 30, 40, 50];

  constructor(private http: HttpClient) { }
  @Input() get totalDataLength() {
    return this.model.totalDataLength;
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value;
  }

  @ViewChild("filter") filter: TemplateRef<any> | undefined;
  @ViewChild("filterableHeaderTemplate")
  protected filterableHeaderTemplate: TemplateRef<any> | undefined;
  @ViewChild("paginationTableItemTemplate")
  protected paginationTableItemTemplate: TemplateRef<any> | undefined;
  paginationSort(e:any){
    
  }
  ngOnInit() {


    this.model.rowsSelectedChange.subscribe(event => console.log(event));
    this.model.selectAllChange.subscribe(event => console.log(event ? "All rows selected!" : "All rows deselected!"));

    if (!this.noData && !this.skeleton) {

      //this.model.data = this.dataset;
      this.loadTableData();
    }
    this.model.pageLength = 10;
    this.model.totalDataLength = 105;
    this.selectPage(1);
  }
  getPage(page: number) {
    const line = (line: number) => [`Item ${line}:1!`, { name: "Item", surname: `${line}:2` }];

    const fullPage: any = [];

    for (let i = (page - 1) * this.model.pageLength; i < page * this.model.pageLength && i < this.model.totalDataLength; i++) {
      fullPage.push(line(i + 1));
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fullPage), 150);
    });
  }
  customSort(index: number) {
    this.sort(this.model, index);
  }

  sort(model: TableModel, index: number) {
    if (model.header[index].sorted) {
      // if already sorted flip sorting direction
      model.header[index].ascending = model.header[index].descending;
    }
    model.sort(index);
  }
  selectPage(page: any) {
    this.getPage(page).then((data: any) => {
      // set the data and update page
      this.model.data = this.prepareData(data);
      this.model.currentPage = page;
    });
  }
  protected prepareData(data: Array<Array<any>>) {
    // create new data from the service data
    let newData: any[][] = [];
    data.forEach(dataRow => {
      let row: any[] = [];
      dataRow.forEach(dataElement => {
        row.push(new TableItem({
          data: dataElement,
          template: typeof dataElement === "string" ? undefined : this.paginationTableItemTemplate
          // your template can handle all the data types so you don't have to conditionally set it
          // you can also set different templates for different columns based on index
        }));
      });
      newData.push(row);
    });
    return newData;
  }
  loadTableData() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      // Load header data
      this.model.header = data.header.map((header: string) => new TableHeaderItem({ data: header }));

      // Load row data
      this.model.data = data.data.map((row: any[]) => row.map(item => new TableItem({ data: item })));
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortable']) {
      for (let column of this.model.header) {
        column.sortable = changes['sortable'].currentValue;
      }
    }
  }

  onRowClick(index: number) {
    console.log("Row item selected:", index);
  }

}
