import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  @Input()
  onDetail: any;

  @Input()
  bio:any;

  constructor() { }

  ngOnInit(): void {
  }

}
