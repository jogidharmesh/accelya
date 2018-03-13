import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comoditycomponent',
  templateUrl: './comoditycomponent.component.html',
  styleUrls: ['./comoditycomponent.component.css']
})
export class ComoditycomponentComponent implements OnInit {

  datalist:any[]
  constructor() { 

    this.datalist = [
     
    {Type :'Activity Number',Flight:'20 sep 2016',Transaction :'26 sep 2016',Partner :'JPSC',Activity : 'Enrollment', Miles:'1000'},
    {Type :'Activity Number',Flight:'20 sep 2016',Transcation :'26 sep 2016',Partner :'JPSC',Activity : 'Enrollment', Miles:'1000'},
    {Type :'Activity Number',Flight:'20 sep 2016',Transcation :'26 sep 2016',Partner :'JPSC',Activity : 'Enrollment', Miles:'1000'},
    {Type :'Activity Number',Flight:'20 sep 2016',Transcation :'26 sep 2016',Partner :'JPSC',Activity : 'Enrollment', Miles:'1000'},
    {Type :'Activity Number',Flight:'20 sep 2016',Transcation :'26 sep 2016',Partner :'JPSC',Activity : 'Enrollment', Miles:'1000'},


  ];
    }


  ngOnInit() {
  }

}
