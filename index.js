// var myChart = echarts.init(document.getElementById('main'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Politics, law', 'Military', 'Computer Science', 'Culture and education', 'Language and writing','History and geography', 'Natural Scienc']
    },
    series: [
        {
            name: 'Source of visit',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Politics, law'},
                {value: 310, name: 'Military'},
                {value: 500, name: 'Computer Science'},
                {value: 135, name: 'Culture and education'},
                {value: 150, name: 'Language and writing'},
                {value: 300, name: 'History and geography'},
                {value: 100, name: 'Natural Science'},
            ]
        }
    ]
};


// myChart.setOption(option);

let oLoading = document.querySelectorAll(".loading")[0];
let oContent = document.querySelectorAll(".content")[0];
oLoading.style.display = 'none';
oContent.style.display = 'block';

//js loading
// setTimeout(() => {
//     oLoading.style.display = 'none';
//     oContent.style.display = 'block';
// }, 300);