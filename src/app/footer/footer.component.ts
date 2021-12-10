import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public date:any;


  constructor() { }

  ngOnInit(): void {

      let now = new Date();
      let month = now.getMonth() + 1;
      let year = now.getFullYear();
      let day = now.getDate();
      let hour = now.getHours();
      this.date = "On est le " + day + "/" + month + "/" + year + " et il est " + hour + " heure";


  }

}
