

playerChart = $('#playerName').val();



var nameChart = response.epicUserHandle;
var KilldeathChart = response.lifeTimeStats[11].value;
var NumofWinsChart = response.lifeTimeStats[8].value;





window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "My First Chart in CanvasJS"
        },
        data: [{
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [{
                    label: "apple",
                    y: 10
                },
                {
                    label: "orange",
                    y: 15
                },
                {
                    label: "banana",
                    y: 25
                },
                {
                    label: "mango",
                    y: 30
                },
                {
                    label: "grape",
                    y: 28
                }
            ]
        }]
    });
    chart.render();
};
