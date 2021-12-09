import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-staff-aniah',
  templateUrl: './staff-aniah.component.html',
  styleUrls: ['./staff-aniah.component.scss']
})
export class StaffAniahComponent implements OnInit {
public team:any
  constructor() { 
  
  }

  ngOnInit(): void {

    this.team = [
        {
          name:"Rémi Mauriceau",
          fonction:"CTO",
          picture:"assets/remi-moriceau-aniah.jpeg",
          linkedin:"https://www.linkedin.com/in/rmoriceau/"
        },
        {
          name:"Vincent Bligny",
          fonction:"CEO",
          picture:"assets/vincent-bligny-aniah.jpeg",
          linkedin:"https://www.linkedin.com/in/vincent-bligny/"
        },
        {
          name:"Pierre Charles Pallin",
          fonction:"Dev Expert",
          picture:"assets/default.png",
          linkedin:"https://fr.linkedin.com/in/pierre-charles-pallin-1b55a884"
        },
    ]



  }

}
