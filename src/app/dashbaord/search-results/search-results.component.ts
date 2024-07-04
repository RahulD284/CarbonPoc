import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  title="Customer Search Results"
  description="Click on any of the “Customer Name” to open the respective record."
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
  @Input() get totalDataLength() {
    return this.model.totalDataLength;
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value;
  }
  searchValue = "";
  displayedCountries = ["BB PLC","BB","Lead",
    "Associate"
  ];
  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.model.pageLength = 10;
    this.model.currentPage = 1;
    this.model.rowsSelectedChange.subscribe(event => console.log(event));
    this.model.selectAllChange.subscribe(event => console.log(event ? "All rows selected!" : "All rows deselected!"));

    if (!this.noData && !this.skeleton) {

      //this.model.data = this.dataset;
      this.loadTableData();
    }
    this.model.isRowFiltered = (index: number) => {
			const nodeName = this.model.row(index)[0].data;
      const legalEntity = this.model.row(index)[1].data;
      const address =this.model.row(index)[2].data;
      const countryName = this.model.row(index)[1].data;
      const RecordType = this.model.row(index)[7].data;
			return (!nodeName.toLowerCase().includes(this.searchValue.toLowerCase())
      && !legalEntity.toLowerCase().includes(this.searchValue.toLowerCase())
      && !address.toLowerCase().includes(this.searchValue.toLowerCase())) 

      || (!this.displayedCountries.includes(countryName) || !this.displayedCountries.includes(RecordType))
      ;
		};

  }

  onRowClick(index: number) {
		console.log("Row item selected:", index);
	}
  
  selectPage(page: any) {
    // ... your code to load the page goes here
    console.log(page);
    this.model.currentPage = page;

    // ... anything you want to do after page selection changes goes here
  }
  loadTableData() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      // Load header data
      this.model.header = data.header.map((header: string) => new TableHeaderItem({ data: header }));

      // Load row data
      this.model.data = data.data.map((row: any[]) => row.map(item => new TableItem({ data: item })));
    });
  }
  filterNodeNames(searchString: string) {
		this.searchValue = searchString;
	}
  filterCountries(countryName: any, checked: any) {
		if (checked) {
			this.displayedCountries.push(countryName);
		} else {
			this.displayedCountries.splice(this.displayedCountries.indexOf(countryName), 1);
		}
	}
  
  overflowOnClick = (event: any) => {
		event.stopPropagation();
	}

}
