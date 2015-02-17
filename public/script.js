/* From the JQuery UI Slider color picker demo: http://jqueryui.com/slider/#colorpicker */  
/* Slightly modified to call the services and pass the values */
function hexFromRGB(r, g, b) {
  var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
  ];
  $.each( hex, function( nr, val ) {
    if ( val.length === 1 ) {
      hex[ nr ] = "0" + val;
    }
  });
  return hex.join( "" ).toUpperCase();
}

//
function refreshSwatch() {
  var red = $( "#red" ).slider( "value" ),
  green = $( "#green" ).slider( "value" ),
  blue = $( "#blue" ).slider( "value" ),
  hex = hexFromRGB( red, green, blue );
  $( "#swatch" ).css( "background-color", "#" + hex );
}

// Main start. Will create the sliders and assign the default values
$(function() {

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 0,
    slide: refreshSwatch,
  });

  $( "#red" ).slider({change: function( event, ui ) {
    var redValue = $( "#red" ).slider( "value" );
    $.get( "/red/"+ redValue , function() {});
  }});

  $( "#green" ).slider({change: function( event, ui ) {
    var greenValue = $( "#green" ).slider( "value" );
    $.get( "/green/"+ greenValue , function() {});
  }});


  $( "#blue" ).slider({change: function( event, ui ) {
    var blueValue = $( "#blue" ).slider( "value" );
    $.get( "/blue/"+ blueValue , function() {});
  }});

});