import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-garph',
  templateUrl: './garph.component.html',
  styleUrls: ['./garph.component.css']
})
export class GarphComponent implements OnInit {

  dataSource: Object;

  constructor() { }

  ngOnInit() {


    this.dataSource = {
      "chart": {
          "caption": "Student Marks",
          "subCaption": "Overall Marks",
          "xAxisName": "Subject",
          "yAxisName": "Marks",
          "numberSuffix": "%",
          "theme": "fusion",
      },
      // Chart Data
      "data": [{
          "label": "Maths",
          "value": "60"
      }, {
          "label": "English",
          "value": "50"
      }, {
          "label": "Physic",
          "value": "60"
      }, {
          "label": "Chemistry",
          "value": "55"
      }, {
          "label": "Computer",
          "value": "90"
      }]
  };

  
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['MATHS','ENGLISH', 'PHYSICS','CHEMISTRY','COMPUTER'];
  public pieChartData: number[] = [60, 50, 60,55,90];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['green','blue','orange','yellow','red']
    },
  ];

changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 5 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,44,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

}
