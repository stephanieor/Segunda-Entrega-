 (function($) {
    "use strict"; // Start of use strict
    
    $(".titular").text("ANIMITAS");
    
})(jQuery); // End of use strict

var mymap = L.map('leaflet').setView([-33.457, -70.648], 11 );
        	
var georeferencias = [
        {
            nombre: "Exequiel",
            coordenadas: [-33.41657, -70.53866]
        }, {
            nombre: "Willy",
            coordenadas: [-33.74328, -70.28469]
        }, {
            nombre: "Juan Morales",
            coordenadas: [-33.54361, -70.58062]
        }, {
            nombre: "Luis Bravo",
            coordenadas: [-33.28246, -70.73763]
        }, {
            nombre: "Baldomero Villagra",
            coordenadas: [-33.3492, -70.70766]
        }, {
            nombre: "Marta Peña",
            coordenadas: [-33.47653, -70.65403]
        }, {
            nombre: "Romualdito",
            coordenadas: [-33.45212, -70.68024]
          },   {
            nombre: "Hans Pozo",
            coordenadas: [-33.63419, -70.62461]
        }, {
            nombre: "Marcos Rojas",
            coordenadas: [-33.44807, -70.63507]
        }, {
            nombre: "Arturo Aguilera",
            coordenadas: [-33.44703, -70.63061]
        }, {
            nombre: "Maria Jose Ramirez",
            coordenadas: [-33.44585, -70.57188]
        }, {
            nombre: "Francisco Contreras",
            coordenadas: [-33.43468, -70.65998]
        }, {
            nombre: "Amalia Herrera",
            coordenadas: [-33.44428, -70.59039]
        }, {
            nombre: "Daniel Zamudio",
            coordenadas: [-33.43986, -70.63816]
         }, {
            nombre: "Gino Paolo",
            coordenadas: [-33.3658, -70.74536] 
         }, {
            nombre: "Marinita",
            coordenadas: [-33.46983, -70.66308] 
          }, {
            nombre: "Pedro Vargas",
            coordenadas: [-33.4165, -70.53865] 
         }, {
            nombre: "El virola",
            coordenadas: [-33.44713, -70.67824]
          }, {
            nombre: "Juan Luis Gajardo",
            coordenadas: [-33.36258, -70.70219] 
         }, {
            nombre: "Daniel Lincura",
            coordenadas: [-33.35798, -70.7042] 
          }, {
            nombre: "Fabiola",
            coordenadas: [-33.43318, -70.65739] 
         }, {
            nombre: "Reychel",
            coordenadas: [-33.47619, -70.59063] 
        
          }, {
            nombre: "Daniela Zuñiga",
            coordenadas: [-33.41646, -70.53875]  
         }, {
            nombre: "Mauricio Andres",
            coordenadas: [-33.43177, -70.65263] 
          }, {
            nombre: "Carlos",
            coordenadas: [-33.53944, -70.59108]  
         }, {
            nombre: "Felipe",
            coordenadas: [-33.44159, -70.6446]
          }, {
            nombre: "Camilo Pérez",
            coordenadas: [-33.45837, -70.67397]  
         }, {
            nombre: "Orlando",
            coordenadas: [-33.35608, -70.70481]
          }, {
            nombre: "Hernan",
            coordenadas: [-33.3561, -70.70479]  
       
          }, {
            nombre: "Astrid Soto",
            coordenadas: [-33.56088, -70.83499]  
        
            }, {
            nombre: "NN",
            coordenadas: [-33.49188, -70.68149]  
         }, {
            nombre: "NN",
            coordenadas: [-33.49109, -70.68186]
          }, {
            nombre: "NN",
            coordenadas: [-33.48719, -70.68128]  
         }, {
            nombre: "NN",
            coordenadas: [-33.49753, -70.68091]
          }, {
            nombre: "NN",
            coordenadas: [-33.48086, -70.68091]  
       
          }, {
            nombre: "NN",
            coordenadas: [-33.47056, -70.67128]  
              
        }, {
            nombre: "NN",
            coordenadas: [-33.47056, -70.67128]  
         }, {
            nombre: "NN",
            coordenadas: [-33.50027, -70.68904]
          }, {
            nombre: "NN",
            coordenadas: [-33.53652, -70.69224]  
         }, {
            nombre: "NN",
            coordenadas: [-33.53506, -70.69046]
          }, {
            nombre: "NN",
            coordenadas: [-33.52586, -70.69719]  
       
          }, {
            nombre: "NN",
            coordenadas: [-33.53263, -70.69752]  
              
        }, {
            nombre: "NN",
            coordenadas: [-33.53406, -70.69438]  
         }, {
            nombre: "NN",
            coordenadas: [-33.52045, -70.69355]
          }, {
            nombre: "NN",
            coordenadas: [-33.50975, -70.68483]  
       
          }, {
            nombre: "NN",
            coordenadas: [-33.51482, -70.70067]  
              
        }, {
            nombre: "Jorge",
            coordenadas: [-33.50884, -70.68456]  
         }, {
            nombre: "Hermerlinda",
            coordenadas: [-33.5151, -70.68583]
          }, {
            nombre: "NN",
            coordenadas: [-33.51524, -70.68586]  
         }, {
            nombre: "Jesica",
            coordenadas: [-33.52146, -70.68724]
          }, {
            nombre: "NN",
            coordenadas: [-33.52154, -70.68731]  
       
          }, {
            nombre: "N.N",
            coordenadas: [-33.50487, -70.68731]  
              
        }
        ];
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets'
        }).addTo(mymap);
        for (var x = 0; x < georeferencias.length; x++) {
            lat = georeferencias[x].coordenadas[0];
            lon = georeferencias[x].coordenadas[1];
            circle = L.circle([lat, lon], {
                fillColor:'red', //Puntos en el mapa//
                fillOpacity: 0.5,
                weight: 0,
                radius: 100
            }).addTo(mymap);
            console.log(lat + "," + lon);
        }


//---------

//Seleccionamos el elemento que va a contener nuestro gráfico
//En este caso, el SVG con ID "gBarras"
var svg = d3.select("#gBarras");

// margenes del gráfico
var margin = {
	top: 20,
	right: 20,
	bottom: 30,
	left: 50
};

var width = +svg.attr("width") - margin.left - margin.right;
//Lo mismo para el alto
var height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//tamaño, o definimos, nuestros ejes
//scaleBand para X y scaleLinear para Y
var x = d3.scaleBand()
	.rangeRound([0, width])
	.padding(0.1);

var y = d3.scaleLinear()
	.rangeRound([height, 0]);

//Cargamos el CSV con los datos que queremos mostrar
var data = [{"Comuna":"Santiago","Animitas":"20"},
{"Comuna":"Lo Espejo","Animitas":"82"},
{"Comuna":"Quilicura","Animitas":"8"},
{"Comuna":"La Florida","Animitas":"3"},{"Comuna":"Maipu","Animitas":"2"},{"Comuna":"Las condes","Animitas":"3"},
];
//d3.csv("./data.csv").then(function (data) {

	//Una vez que cargue los datos, estaran disponible en data
	//console.log(data);

	
	x.domain(data.map(function (d) {
		return d.Comuna;
	}));

	
	y.domain([0, d3.max(data, function (d) {
		return Number(d.Animitas);
	})]);

	
	g.append("g")
	.attr("transform", "translate(0," + height + ")")
	.attr("class", "claseEjeX")
	.call(d3.axisBottom(x));

	
	g.append("g")
	.call(d3.axisLeft(y))
	.append("text")
	.attr("fill", "#000")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", "0.71em")
	.attr("text-anchor", "end")
	.attr("class", "claseEjeY")
	.text("Animitas");


	var coloresBarra = d3.scaleOrdinal().range(["#CC3300", "#CC3366", "#FF3366", "#FF3300", "#FF3399", "#660000"]);
    g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .style("fill", function(d, i) {
        return coloresBarra(i);
      })
    .attr("x", function (d) {
        return x(d.Comuna);
    })
    .attr("y", function (d) {
        return y(Number(d.Animitas));
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
        return height - y(Number(d.Animitas));
    });
    



var datosTorta = [
	{name: "Accidentes", value: 17},
	{name: "Asesinatos", value: 8},
	{name: "Desconocidas", value: 93},
    {name: "Biciaccidentes", value: 6,}
];

var text = "";

var anchoTorta = 200;
var altoTorta = 200;
var grosor = 40;
var duracion = 750;
var padding = 10;
var opacidad = 0.8;
var opacidadHover = 1;
var otroOpacidadHover = 0.8;
var margenToolTip = 13;

var radio = Math.min(anchoTorta-padding, altoTorta-padding) / 2;
var color = d3.scaleOrdinal(["#CC6699", "#DC143C", "#8B0000", "#F08080"]);



var svgTorta = d3.select('#gTorta')
.append("svg")
.attr('class', 'pie')
.attr('width', anchoTorta)
.attr('height', altoTorta);

var gTorta = svgTorta.append('g')
.attr('transform', 'translate('+(anchoTorta/2) + ',' + (altoTorta/2) + ')' );

var arc = d3.arc()
.innerRadius(0)
.outerRadius(radio);

var pie = d3.pie()
.value(function(d){ return d.value; })
.sort(null);

var path = gTorta.selectAll('path')
.data(pie(datosTorta))
.enter()
.append("g")
.append("path")
.attr("d", arc)
.attr("fill", (d,i) => color(i))
.style("opacity", opacidad)
.style("stroke", "white");

let legend = d3.select("#gTorta").append('div')
			.attr('class', 'legend')
			.style('margin-top', '30px');

let keys = legend.selectAll('.key')
			.data(datosTorta)
			.enter().append('div')
			.attr('class', 'key')
			.style('display', 'flex')
			.style('align-items', 'center')
			.style('margin-right', '20px');

		keys.append('div')
			.attr('class', 'symbol')
			.style('height', '10px')
			.style('width', '10px')
			.style('margin', '5px 5px')
			.style('background-color', (d, i) => color(i));

		keys.append('div')
			.attr('class', 'name')
			.text(d => `${d.name} (${d.value})`);

		keys.exit().remove();