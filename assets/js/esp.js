anychart.onDocumentReady(function () {
  var data = anychart.data.set([
      ["Nico Williams", 14],
      ["Borja Iglesias",10],
      ["Álvaro Morata", 13],
      ["Abel Ruiz", 11,],
      ["Ferran Torres", 9]
    ]);

    var chart = anychart.bar();    
    var series = chart.bar(data);

    chart.title("Delanteros y sus goles en la temporada");

    chart.xAxis().title("Delantero");
    chart.yAxis().title("Goles");

    chart.container("graf_esp");

    chart.draw();
});