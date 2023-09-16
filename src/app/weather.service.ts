import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  // apiKey = '5cbea6506eb43ec70555a2c0c7b6c610';

  constructor(private http: HttpClient) { }

  getAPIData(city:any){
    console.log("SINGLE CITY", city)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cbea6506eb43ec70555a2c0c7b6c610`;
    return this.http.get(url);
  }


  getWeatherData() {
    const cities = [
      { cityName: '-Select your City-' },
      { cityName: 'Rajkot'},
      { cityName: 'Pune'},
      { cityName: 'Delhi' },
      { cityName: 'Nainital' },
      { cityName: 'Kolkata' },
      { cityName: 'Jaipur' },
      { cityName: 'Bengaluru' },
      { cityName: 'Lucknow' },
      { cityName: 'Jammu' },
      { cityName: 'Goa' },
      { cityName: 'Bhopal' },
      { cityName: 'Allahabad' },
      { cityName: 'Vadodara' },
      { cityName: 'Jodhpur' },
      { cityName: 'Gwalior' }
    ];

    return cities;
  }
}
