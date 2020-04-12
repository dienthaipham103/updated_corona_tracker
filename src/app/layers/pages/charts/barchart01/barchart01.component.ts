import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Barchart01_model, ChartsService } from 'src/app/services/charts.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-barchart01',
  templateUrl: './barchart01.component.html',
  styleUrls: ['./barchart01.component.scss']
})
export class Barchart01Component implements OnInit {
  chart = [];
  data;

  constructor(private chartsService: ChartsService, 
              public languageService: LanguageService) { }

  ngOnInit(): void {
        this.chartsService.getBarChart01_data().subscribe(data=>{
          this.data = data
          this.data['labels'] = data['labels'].map(x => new Date(x));
          let count = this.data['labels'].length;

                 // Bar chart
        this.chart = new Chart('canvas3', {
          type: 'bar',
          data: {
          labels: this.data['labels'],
          datasets: [
            {
            label: "Population (millions)",
            backgroundColor: Array(count).fill('#B9ADC2'),
            data: this.data['new_cases']
            }
          ]
          },
          options: {
            legend: { display: false },
            title: {
            display: true,
            text: this.languageService.show('barchart01_title')
            },
            scales: {
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: this.languageService.show('case')
                },
                ticks: {
                  beginAtZero:true,
                  userCallback: function(value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(',');
                      return value;
                  }
                }
              }],
              xAxes:[{
                offset: true,
                gridLines:{
                  display: false
                },
                type: 'time',
                time: {
                  tooltipFormat: 'll',
                  parser: 'D/M/YY',
                  unit: 'day',
                  unitStepSize: 1,
                  displayFormats: {
                    'day': 'D/M/YY'
                  }
                }
              }]
            },
    
            tooltips: {
              callbacks: {
                    label: function(tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        if(parseInt(value) >= 1000){
                                   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " people";
                                } else {
                                   return value + " people";
                                }
                    }
              } // end callbacks:
            }, //end tooltips  
    
          }
        });

        })
 
  }

}
