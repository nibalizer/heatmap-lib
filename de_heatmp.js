//let csgoMaps = require("./csgo_maps.js");
//
// Don't know what this does
window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.msRequestAnimationFrame;

const csgoMaps  = {
  mapDetails : {
    "de_cache": {
      "pos_x" : "-2000",
      "pos_y" : "3250",
      "scale" : "5.5"
    },
    "de_cbble": {
      "pos_x" : "-3840", // upper left world x coordinate
      "pos_y" : "3072", // upper left world y coordinate
      "scale" : "6"
    },
    "de_inferno": {
      "pos_x" : "-2087", // upper left world x coordinate
      "pos_y" : "3072", // upper left world y coordinate
      "scale" : "4.9"
    },
    "de_mirage": {
      "pos_x" : "-3230",
      "pos_y" : "1713",
      "scale" : "5.00"
    },
    "de_nuke": {
      "pos_x" : "-3453",
      "pos_y" : "2887",
      "scale" : "7.00"
    },
    "de_overpass": {
      "pos_x" : "-4831",
      "pos_y" : "1781",
      "scale" : "5.2"
    },
    "de_train": {
      "pos_x" : "-2477",
      "pos_y" : "2392",
      "scale" : "4.7"
    }
  }
}

function get(id) {
  return document.getElementById(id);
}

function de_heatmp(mapName, elementId, data) {
  // create the heatmap
  var frame = null;
  var null_data = [];
  this.heat = simpleheat(elementId).data(data).max(18),
    frame;
  this.heat.radius(15, 10);


  // get csgo map data
  var mapData = csgoMaps.mapDetails[mapName];

  this.draw = function() {
    this.heat.draw();
    frame = null;
  };

  this.add = function(x, y, intensity) {
    this.heat.add(x, y, intensity);
    frame = frame || window.requestAnimationFrame(draw);
  };

  this.get = function (id) {
      return document.getElementById(id);
  }

  this.translate_coordinates = function (x_game, y_game){
    pos_x = mapData.pos_x;
    pos_y = mapData.pos_y;
    scale_factor = mapData.scale;

    x_prime = (x_game - pos_x) / scale_factor;
    y_prime = (pos_y - y_game) / scale_factor;

    return {"x": x_prime, "y": y_prime};
  }
}

