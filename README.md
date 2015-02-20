# RGB-slider

RGB-slider is an application to control a RGB LED on your Raspberry Pi using a web interface.


## Ok, but what is it exactly?

Rgb-slider is using NodeJS to provide a web interface to send some command to a Pi-Blaster daemon to control the intensity of the three colours of a RGB LED using Pulse Width Modulation (PWM).

When you run the application, it will start a web server listening for connections on the port 3000.
The server is hosting a single web page (index.html) displaying 3 horizontal sliders: one for each colour: red, green and blue. The page is a clone (with tiny modifications) of the Jquery UI slider demo you can find [here.](http://jqueryui.com/slider/#colorpicker)

When you access the page and move a slider, the value of this particular colour is sent to the server using a web service. The value, between 0 and 255, is divided by 255 to get a value between 0 and 1. This final value is passed as a PWM value to the pi-blaster daemon.

The default GPIO pin configuration is:

    Colour | GPIO Pin Number
     ---   | ---
     Red   | 17
     Green | 18
     Blue  | 22

You just have to wire your LED on the above pins (don't forget the resistors), start the application and use a browser to connect to the page to play with the sliders.


## Prerequisites

On your Raspberry you need the following programs:

* NodeJS and npm, I'm using the version available [here](https://github.com/nathanjohnson320/node_arm), it's working fine on my Raspberry A+.
* pi-blaster daemon, available [here](https://github.com/sarfata/pi-blaster).
* git, to clone the repository - on Raspbian you can simply do `sudo apt-get install git` - alternatively you can download a zip file from my Github.

You also need a RGB LED wired to the GPIO. Have a look at [this video](https://www.youtube.com/watch?v=b4_R1eX9K6s).


## Installation and usage

* Clone the repo: `git clone https://github.com/Kylir/rgb-slider.git`
* Optional: Edit the index.js to change the GPIO pins
* Install the dependencies using the command `npm install`
* Start the application by typing `node index.js`
* Go to the slider page (point your browser to the IP of your Raspberry - port 3000). You can use the command `sudo ip addr show` to see what your IP is. Add the `http://` prefix and the `:3000` suffix. For instance, I can access my application using `http://192.168.1.74:3000`. Please note that depending on your network configuration, your application is potentially accessible to anyone in the world...


## NodeJS dependencies

The application is using two modules:

* [Express JS](http://expressjs.com/) to create the server and the web services.
* [Pi-blaster.js](https://github.com/sarfata/pi-blaster.js) to talk to the pi-blaster daemon.


## What to do next?

This toy application demonstrates that it is not really difficult to have a web interface to control something plugged on your GPIO. You can use the same kind of idea to control a robot remotely or to switch on and off your lights at home while you are on holiday. Use your imagination!

Also, because it is so easy to build a web application using NodeJS, there are a lot of articles on the subject. Have a look for instance at the Adafruit tutorial [here](https://learn.adafruit.com/node-embedded-development). 

There is another NodeJS module really nice to use to play with the GPIO: [onoff](https://github.com/fivdi/onoff). With this module you can read from the GPIO, opening a lot more possibilities.

## License

MIT License: see LICENSE.txt