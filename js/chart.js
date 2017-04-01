$(function () { 
    var myChart = Highcharts.chart('chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Your billion $ expenses'
        },
        xAxis: {
            categories: ['2011', '2012', '2015', '2016']
        },
        yAxis: {
            title: {
                text: '$ billion spent'
            }
        },
        series: [{
            name: 'January',
            data: [1, 2, 4, 7]
        }, {
            name: 'February',
            data: [5, 7, 3, 68]
        }, {
            name: 'March',
            data: [9, 11, 15, 98]
        }, {
            name: 'April',
            data: [19, 21, 115, 58]
        }, {
            name: 'May',
            data: [91, 121, 105, 28]
        }, {
            name: 'June',
            data: [29, 71, 25, 8]
        }, {
            name: 'July',
            data: [39, 81, 15, 28]
        }, {
            name: 'August',
            data: [49, 21, 5, 38]
        }, {
            name: 'September',
            data: [59, 91, 65, 48]
        }, {
            name: 'October',
            data: [19, 61, 25, 58]
        }, {
            name: 'November',
            data: [29, 1, 95, 18]
        }, {
            name: 'December',
            data: [89,31, 5, 48]
        }]
    });
});