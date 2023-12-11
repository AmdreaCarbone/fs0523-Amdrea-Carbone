import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meteo';
  weather: any;

  searchForms!: FormGroup;

  constructor(private fb:FormBuilder,
    private service:WeatherService){}

  ngOnInit(){
    this.searchForms = this.fb.group({
      city:[null, Validators.required]
    })
  }
searchWeather(){
   this.service.searchWeatherByCity(this.searchForms.get(['city'])!.value).subscribe((res)=>{
    this.weather = res.data
   })

}







}



