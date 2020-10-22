var canvas = document.getElementById('canvas').getContext('2d');
var myChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六','周天'],
        datasets: [
       {
		   // fillColor:"rgba(255,255,255,0)",
		   // strokeColor:"rgba(0,0,0,1)",
		   // pointColor:"#fff";
		   // pointHighlightFill:"#fff";
            label: '今日',
            data: [1, 22, 3,4,15, 5,6,17,8,28,9,9],
            borderColor:'blue',
            backgroundColor:'skyBlue',
            borderWidth: 1,
            fill: false,
            yAxisID: 'y-axis-1',
        },
       {
            label: '昨日',
            data: [2,8,1,4,2,4,5,7,8,8,4,3],
            borderColor:'red',
            backgroundColor:'pink',
            borderWidth: 1,
            fill: false,
            yAxisID: 'y-axis-2',
             
        },
  
]
    },
    options:{
        scales:{
            yAxes: [{
				type: 'linear',
				display: true,
				position: 'left',
				id: 'y-axis-1',
            }, 
			{
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false
                }
            }],      
        }
    }
});