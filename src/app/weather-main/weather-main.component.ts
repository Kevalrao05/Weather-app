import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent {
  cities: any;
  getData: any;
  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.cities = this.weatherService.getWeatherData();
    // this.cities = this.weatherService.getWeatherData();
    // this.getCityWeatherData()
    console.log(this.cities);

  }

selectCity(event:any) {
  console.log("THIS IS THE EVENT OF CITY SELECTION",event.target.value)
  this.weatherService.getAPIData(event.target.value).subscribe((res:any)=>{
    this.getData = res;
    console.log("RES", res)
  })
}

}
