import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss']
})
export class OpinionesComponent implements OnInit {

  chart: any = "";
  data: any = "";
  constructor() { }

  ngOnInit(): void {
    this.chart = document.getElementById("myChart");
    Chart.register(...registerables);
    new Chart(this.chart, {
      type: 'pie',
      data: {
          labels: ['Si', 'No', 'Tal vez'],
          datasets: [{
              data: [60, 30, 10],
              backgroundColor: [
                'rgba(89, 108, 217, 1)',
                'rgba(38, 38, 38, 1)',
                'rgba(214, 214, 214, 1)'
              ],
              borderColor: [
                'rgba()'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
    }
    });
    
  }

}
