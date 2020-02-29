import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() actualPage;
  @Output() actualPageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newPage){
    this.actualPage = newPage;
    this.actualPageEmitter.next(this.actualPage);
  }





}
