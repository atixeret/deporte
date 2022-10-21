var DIR = "./assets/images/";

var nodes = null;
var edges = null;
var network = null;

function draw() {
  var DIR = "./assets/images/";
  nodes = [
    { id: 1, 
      shape: "circularImage", 
      image: DIR + "argentina.jpg",
      label: "Argentina" 
    },
    { id: 2, 
      shape: "circularImage", 
      image: DIR + "espana.png",
      label: "España" 
    },
    { id: 3, 
      shape: "circularImage", 
      image: DIR + "mexico.png",
      label: "México" 
    },
    {
      id: 4,
      shape: "circularImage",
      image: DIR + "grecia.jpg",
      label: "Grecia"
    },
    { id: 5, 
      shape: "circularImage", 
      image: DIR + "venezuela.png",
      label: "Venezuela"
    },
    { id: 6, 
      shape: "circularImage", 
      image: DIR + "brazil.png",
      label: "Brasil"
    },
    { id: 7,
      shape: "circularImage",
      image: DIR + "canada.png",
      label: "Canada"
    },
    { id: 8, 
      shape: "circularImage", 
      image: DIR + "china.jpeg",
      label: "China"
    },
    { id: 9, 
      shape: "circularImage", 
      image: DIR + "eeuu.png",
      label: "EEUU"
    },
    { id: 10, shape: "circularImage", image: DIR + "japon.png", label: "Japon" },
    { id: 11, shape: "circularImage", image: DIR + "bolivia.png", label: "Bolivia" },
    { id: 12, shape: "circularImage", image: DIR + "ecuador.jpg", label: "Ecuador" },
    { id: 13, shape: "circularImage", image: DIR + "suiza.jpg", label: "Suiza" },
    { id: 14, shape: "circularImage", image: DIR + "noruega.png", label: "Noruega" },
    {
      id: 15,
      shape: "circularImage",
      image: DIR + "sudafrica.png",
      brokenImage: DIR + "sudafrica.png",
      label: "Sudafrica, Descalificado",
    },
    {
      id: 16,
      shape: "circularImage",
      image: DIR + "suiza.jpg",
      brokenImage: DIR + "suiza.jpg",
      label: "ganador",
    },
  ];

  // se crea la conexion entre los edges
  edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 10 },
    { from: 4, to: 6 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 3, to: 10 },
    { from: 10, to: 11 },
    { from: 11, to: 12 },
    { from: 12, to: 13 },
    { from: 13, to: 14 },
    { from: 9, to: 16 },
  ];

  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    nodes: {
      borderWidth: 4,
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    },
    edges: {
      color: "lightgray",
    },
  };
  network = new vis.Network(container, data, options);
}
