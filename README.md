#roBotanist
roBotanist is a plant watering robot!  Through its companion app, users can configure roBotanist to water any kind of plant.

##Technologies
hardware schematic:
![](http://i.imgur.com/02PjJcx.png)

###hardware: 

* 1N4001 diode (http://adafru.it/755)
* PN2222A transistor (http://adafru.it/756)
* 12v 1000mA DC power supply (http://adafru.it/798)
* peristaltic pump (http://adafru.it/1150)

###software:
* Node/Express()
* PSQL
* Raspbian/NOOBS
* JS/JQUery/HTML/CSS

##Approach
Research came first.  I had a concept in mind and wanted to see if it had already been done.  Landing on a design that was pretty close to what I wanted, I spent a couple days redesigning and implementing an initial prototype that suited my specific needs.  Once I proved that the pump could be modulated with a Pi, software was next. </br>

Software was fairly straight forward.  I knew that I was going to use a basic MVC architecture so I just jumped right into it.  My personal workflow always starts with the backend and moved forward.  Build DB and tables -> build models -> build routes -> build views.  Once everything worked, I realized that my model for the robot was a little sloppy, so I seperated it into two documents - one model for pulling the data for the bot from the database, and a controller that took that data and set the variables on the Pi.



##User Stories
* As a user I want a pump that automatically waters my plants.
* As a user I want remote access to my plant watering device.
* As a user I want to be able to select the frequency that my plants get watered.
* As a user I want to water my plants whenever I want.
* As a user I want to know when my plants will be watered next.


##Wireframes
![](http://i.imgur.com/BKS8O3A.png)
##Proposal
https://docs.google.com/document/d/1sTxxELSPHc-4FkUCoSbffH0sw_guBIuC_jBJVE7zMmc/edit

##Upcoming Features/Hurdles/Problems
* The next major feature is to allow users to manually set all aspects of the device, including how much water is given at a time, how often they want it to be watered, and what time of day the plant should be watered.
* A lot of features in this model are for demonstration purposes only.  The big one, that is going to be updated after demonstrations are finished, is to change the information handling for the "status banner".   Currently the device has two timers, one that is a backend cron job that lives on the pi, and another that is a front-end timer that syncs with the backend timer.  In the final product, the front end will be performing ajax calls to get that data from the backend and not have its own independent timer.

##Special Thanks
