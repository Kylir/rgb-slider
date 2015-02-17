# rgb-slider

A Node JS application to control a RGB LED using pi-blaster.

## Ok, but what is it?

rgb-slider will start a web server listening for connection on the port 3000.
The server is hosting a single web page (index.html) displaying 3 horizontal sliders: one for each color, red, green and blue.
Also, the server is providing 3 services to pass the rgb value for each color.

Please note that the html, css and javascript code is taken from the JQuery UI demo page for the sliders [here](http://jqueryui.com/slider/#colorpicker
). I just changed 


## Behind the scene

When you move a slider

## Prerequisites

On your Raspberry you need the following:

* NodeJS and npm
* pi-blaster daemon
* git



## Installation

* Clone the repo: `git clone https://github.com/Kylir/rgb-slider.git`
* Edit the index.js
