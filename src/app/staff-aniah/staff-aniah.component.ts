import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-staff-aniah',
  templateUrl: './staff-aniah.component.html',
  styleUrls: ['./staff-aniah.component.scss']
})
export class StaffAniahComponent implements OnInit {
public bio:any

public team:any

  constructor() { 
  
  }

  onDetail(event:any){
    console.log(event);
    this.bio = event;
  }

  ngOnInit(): void {



    this.team = [
        {
          name:"Rémi Moriceau",
          fonction:"CTO",
          picture:"assets/remi-moriceau-aniah.jpeg",
          linkedin:"https://www.linkedin.com/in/rmoriceau/",
          bio:"Rémi trains and leads Aniah’s technical teams in a continuous quality testing process to offer the most advanced EDA solutions tailored to the needs of our customers."
        },
        {
          name:"Vincent Bligny",
          fonction:"CEO",
          picture:"assets/vincent-bligny-aniah.jpeg",
          linkedin:"https://www.linkedin.com/in/vincent-bligny/",
          bio:"Vincent spent a decade solving the problem of electrical errors and improving productivity in circuit design. His understanding of EDA issues forms the basis of Aniah’s strategy."
        },
        {
          name:"Pierre Charles Pallin",
          fonction:"Dev Expert",
          picture:"assets/default.png",
          linkedin:"https://fr.linkedin.com/in/pierre-charles-pallin-1b55a884",
          bio:"Dev Expert for Aniah"
        },
    ]



  }

}
