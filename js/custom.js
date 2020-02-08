$(document).ready(function () {
  // SideNav Button Initialization
  $(".button-collapse").sideNav({
    slim: true
  });

  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);

  //Intitiate Datatable
  $('#dtBasicExample').DataTable({
    "searching": false // false to disable search (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
  
  $('.mdb-select').materialSelect();

  //Stop carousels from auto changing
  $('.carousel').carousel('pause')

  //Pie chart
  var ctxP = document.getElementById("labelChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    plugins: [ChartDataLabels],
    type: 'pie',
    data: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [{
        data: [210, 130, 120, 160, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          boxWidth: 10
        }
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
            });
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;
          },
          color: 'white',
          labels: {
            title: {
              font: {
                size: '16'
              }
            }
          }
        }
      }
    }
  });

  //bar
  var ctxB = document.getElementById("barChart").getContext('2d');
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  var ctxSc = document.getElementById('scatterChart').getContext('2d');
var scatterData = {
datasets: [{
borderColor: 'rgba(99,0,125, .2)',
backgroundColor: 'rgba(99,0,125, .5)',
label: 'V(node2)',
data: [{
x: 1,
y: -1.711e-2,
}, {
x: 1.26,
y: -2.708e-2,
}, {
x: 1.58,
y: -4.285e-2,
}, {
x: 2.0,
y: -6.772e-2,
}, {
x: 2.51,
y: -1.068e-1,
}, {
x: 3.16,
y: -1.681e-1,
}, {
x: 3.98,
y: -2.635e-1,
}, {
x: 5.01,
y: -4.106e-1,
}, {
x: 6.31,
y: -6.339e-1,
}, {
x: 7.94,
y: -9.659e-1,
}, {
x: 10.00,
y: -1.445,
}, {
x: 12.6,
y: -2.110,
}, {
x: 15.8,
y: -2.992,
}, {
x: 20.0,
y: -4.102,
}, {
x: 25.1,
y: -5.429,
}, {
x: 31.6,
y: -6.944,
}, {
x: 39.8,
y: -8.607,
}, {
x: 50.1,
y: -1.038e1,
}, {
x: 63.1,
y: -1.223e1,
}, {
x: 79.4,
y: -1.413e1,
}, {
x: 100.00,
y: -1.607e1,
}, {
x: 126,
y: -1.803e1,
}, {
x: 158,
y: -2e1,
}, {
x: 200,
y: -2.199e1,
}, {
x: 251,
y: -2.398e1,
}, {
x: 316,
y: -2.597e1,
}, {
x: 398,
y: -2.797e1,
}, {
x: 501,
y: -2.996e1,
}, {
x: 631,
y: -3.196e1,
}, {
x: 794,
y: -3.396e1,
}, {
x: 1000,
y: -3.596e1,
}]
}]
}

var config1 = new Chart.Scatter(ctxSc, {
data: scatterData,
options: {
title: {
display: true,
text: 'Scatter Chart - Logarithmic X-Axis'
},
scales: {
xAxes: [{
type: 'logarithmic',
position: 'bottom',
ticks: {
userCallback: function (tick) {
var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
if (remain === 1 || remain === 2 || remain === 5) {
return tick.toString() + 'Hz';
}
return '';
},
},
scaleLabel: {
labelString: 'Frequency',
display: true,
}
}],
yAxes: [{
type: 'linear',
ticks: {
userCallback: function (tick) {
return tick.toString() + 'dB';
}
},
scaleLabel: {
labelString: 'Voltage',
display: true
}
}]
}
}
});
});



