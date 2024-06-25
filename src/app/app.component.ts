import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableModel, TableHeaderItem, TableItem, PaginationModel } from 'carbon-components-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  model = new TableModel();
  title = 'carbonPoc'; 
  condensed:boolean = true;
  fullWidth:boolean = true;
  narrow:boolean = true;

  paginationModel : any = new PaginationModel();
  // totalData = [
  //   { name: 'John Doe', age: 28, role: 'Developer' },
  //   { name: 'Jane Smith', age: 34, role: 'Designer' },
  //   { name: 'Samuel Green', age: 45, role: 'Manager' },
  //   { name: 'Michael Brown', age: 29, role: 'Developer' },
  //   { name: 'Emily White', age: 32, role: 'Designer' },
  //   { name: 'Matthew Black', age: 50, role: 'Manager' },
  //   { name: 'Olivia Grey', age: 27, role: 'Developer' },
  //   { name: 'Sophia Blue', age: 38, role: 'Designer' },
  //   { name: 'Ava Red', age: 44, role: 'Manager' },
  //   { name: 'Isabella Yellow', age: 31, role: 'Developer' }
  // ];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.model.header = [
    //   new TableHeaderItem({ data: 'Name' }),
    //   new TableHeaderItem({ data: 'Age' }),
    //   new TableHeaderItem({ data: 'Role' })
    // ];
    // this.updateTableData();

    // this.model.data = [
    //   [new TableItem({ data: 'John Doe' }), new TableItem({ data: 28 }), new TableItem({ data: 'Developer' })],
    //   [new TableItem({ data: 'Jane Smith' }), new TableItem({ data: 34 }), new TableItem({ data: 'Designer' })],
    //   [new TableItem({ data: 'Samuel Green' }), new TableItem({ data: 45 }), new TableItem({ data: 'Manager' })]
    // ];   
}
// updateTableData() {
//   const startIndex = (this.paginationModel.currentPage - 1) * this.paginationModel.pageLength;
//   const endIndex = startIndex + this.paginationModel.pageLength;
//   const paginatedData = this.totalData.slice(startIndex, endIndex).map(item => [
//     new TableItem({ data: item.name }),
//     new TableItem({ data: item.age }),
//     new TableItem({ data: item.role })
//   ]);

//   this.model.data = paginatedData;
// }

// onPageChange(page: any) {
//   this.paginationModel = page;
//   this.updateTableData();
// }
}