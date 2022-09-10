<script>
import {Doughnut} from "vue-chartjs";

export default {
  name: "homeDoughnutChart",
  extends: Doughnut,
  props: {
    dataset:null,
    option:null,
    labels:null
  },
  mounted () {
    this.renderChart({
      labels: this.dataset.label || ['First','Second','Third','fourth','fifth'] ,
      datasets: [
        {
          label: this.dataset.label || 'My Data',
          data: this.dataset.data ||  [5, 50, 80, 15, 6],
          backgroundColor: this.dataset.backgroundColor || ['#163859', '#2768BF', '#0385B6','#49ACD5','#CEDEE5'],
          borderWidth:0,
        }
      ],
    },{
      cutoutPercentage: 75,
      responsive: true,
      maintainAspectRatio: false,
      //不要顯示 chart 的 label
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines:{
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines:{
            display: false
          }
        }]
      },
      elements:{
        point:{
          radius:1
        },
      }
    })

  }
}
</script>

