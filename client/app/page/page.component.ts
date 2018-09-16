import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {fauna} from '../../../Fauna/fauna';
import L from "leaflet";

import { DataService } from "../data.service";

//leaflet import
declare let L;
var mymap;
var markers = new Array();

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit
{
  //person arrau
  faunaData: any;
  result :any[]= [];
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,private data : DataService)
  {
    this.data.userDataSource.subscribe(res => {
      this.faunaData = res
    },err =>{console.log(err)})
    console.log(this.faunaData);
  }
  ngOnInit()
  {
  }
  /*buildmap()
  {
    mymap = L.map('mapid').setView([0,0], 1);
    //Set Map-Layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);
  }*/
}
