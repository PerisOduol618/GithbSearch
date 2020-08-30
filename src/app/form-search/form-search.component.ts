import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  searchTerm:string
  @Output() emitSearch = new EventEmitter<any>();
  constructor() { }
  
  search(){
    this.emitSearch.emit(this.searchTerm)
  }
  ngOnInit(): void {
  }

}
