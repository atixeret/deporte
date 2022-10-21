        anychart.onDocumentReady(function () {
          var chart = anychart.pie3d([
            ['2022', 235],
            ['2021', 552],
            ['2020', 491],
            ['2019', 619],
            ['2018', 388],
            ['2017', 405]
          ]);
    
          chart
            .title('Puntos en los mundiales anteriores')
            .radius('43%');
    
          chart.container('gra_arg');
          chart.draw();
        });