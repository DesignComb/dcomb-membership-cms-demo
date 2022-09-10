<script>
import Vue from 'vue'
import {Line} from 'vue-chartjs'

export default {
  name: "homeLineChart",
  extends: Line,
  props: {
    dataset: null,
    option: null,
    colors:null
  },
  data() {
    return {
      gradient: null,
    }
  },
  methods: {
    render(){
      this.renderChart({
      labels: this.dataset.label || ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
      datasets: [
        {
          label: '',
          data: this.dataset.data || [65, 59, 80, 81, 56, 55, 40],
          borderColor: this.option.color1,
          borderWidth: 2.5,
          backgroundColor: this.gradient,
          tension: 0.45,
          pointBorderWidth: 1.5,
          pointBorderColor: this.option.color1,
          pointBackgroundColor: "#FFF",
          //Hover
          pointHoverBackgroundColor:'#FFF',
          pointHoverBorderColor: this.option.color1,
          pointHoverRadius:1.5,
          pointHoverBorderWidth:6
        }
      ],
    }, {
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
          },
          gridLines: {
            display: true,
            drawBorder: true,
            tickMarkLength:true,
            drawOnChartArea: false,
            lineWidth: 2,
            color:this.colors.borderColor
          }
        }],
        yAxes: [{
          ticks: {
            display: true,
            padding:10,
            stepSize: 10,
            maxTicksLimit:1,
            fixedStepSize: 1,
            beginAtZero: false,
            fontColor:this.colors.fontColor
          },
          gridLines: {
            display: true,
            drawBorder: true,
            tickMarkLength:false,
            drawOnChartArea: false,
            lineWidth: 2,
            color:this.colors.borderColor
          }
        }]
      },
      layout: {
        padding: {
          right: 20
        }
      },
      elements: {
        point: {
          radius: 3,
        },
      }
    })
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.render()
    })
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 90)
    this.gradient.addColorStop(0, this.option.color1)
    this.gradient.addColorStop(1, this.option.color2);
  }
}
</script>
