import { Component, OnInit } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class SecondmapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 30.733315;
  lng: number = 76.779419;
  places:any[]=[]; 
  iconUrl:any;
  googleicons:any;

  

  // Chandigarh  30.733315 ,76.779419
  // Mohali 30.704649,76.717873
  // New Delhi 28.613939 , 77.209023

 
  
  constructor(
    private http: Http,public mapsAPILoader:MapsAPILoader
  ) {
        this.getJSON();
  }
  bounds:any;
  models:any;
  search(){ 
    //call this method inside the promisse
    this.setBounds();

  }

  setBounds(){
		this.mapsAPILoader.load().then(() =>{
			this.bounds = new window['google'].maps.LatLngBounds();
			for(let item of this.models){
				this.bounds.extend(new window['google'].maps.LatLng(item.model.lat,item.model.lng));
			}
		});
	}


  ngOnInit() {
    this.iconUrl="assets/marker.png"
  }
getJSON() {
this.http.get("assets/location.json").subscribe(response => {
          let temp = response.json();
          this.places = temp.locations;
          console.log("places", this.places);
        })
  }

  labelOptions = {
    color: '#CC0000',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'label 1',
    }


    private icon = {
      url: 'assets/marker1.png', 
      scaledSize: {
        height: 50,
        width: 30
      }
    };
}
