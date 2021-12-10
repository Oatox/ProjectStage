import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {

  dataTeam(){
    this.onDetail.emit(this.test);
  }


  @Input()
  test: any

  @Output()
  onDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {


  }

}

