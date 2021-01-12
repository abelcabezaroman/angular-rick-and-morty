import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() paginationInfo: any = {};
  @Output() newPageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  newPageEmit(page){
    this.newPageEmitter.emit(page)
  }

}
