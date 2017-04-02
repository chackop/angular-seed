# Weather App

This project is an application to monitor the 5 day weather forecast for London. 
It is the first iteration which is based on application skeleton from angular seed app. 
It also is mobile responsive which is achieved using bootstrap.

## Functions

The angular application skeleton is based on angular seed. 
So it requires npm to be installed so please ensure to type 'npm install' in the project directory. 
This would also ensure bower is upto date and to run the app, type 'npm start'.
Currently the app uses a registered controller that gets the data based on the unique open weather API Key.
Then this data is stored in a scoped object which is used in the view level.
In the view level, ng-repeat is used to iterate through and display the basic data list.
Further nested ng-repeat is also used to access the specific array data as well.
Bootsrap grid classes are also used to make the specific panels responsive.
The app is also deployed over the site https://chackop.github.io/angular-weather-app/
Also please note that the open weather api call takes place over http (not https) as the ssl is only avaialble for the premium version.
So please ensure to let the scripts run when the app has loaded (by clicking shield icon that comes in chrome for e.g.).

### Future Enhancements

Some of the key enhancements for future iterations include:
Use custom directives so that solution can be applied with multiple parameters like cities, coordinates, etc.
Input to search by city, id or co-ordinates and apply validation.
Apply options to switch between units and show extra info.
Options to show generalised details per day and also options to show extra details per day.
Usage of weather icons based on the conditional codes.
 
