# addressFinder
Find address with set of locations as input



Sample Curl 1(for multiple locations):

    curl--location--request POST 'http://localhost/addressForLocation' \
--header 'Content-Type: application/json' \
--data - raw '{
"locations": [
    "28.657776,77.289506", "28.657876,77.289606",
    "24.557776,87.289506", "22.657876,78.289606"
]
}'

Sample Curl 2(for single location):

    curl--location--request POST 'http://localhost/addressForLocation?location=28.657776,77.289506,28.657876,77.289606' \
--data - raw ''




Important points:
- The code is in pseudo form and not production ready.Certain tweaks and syntax improvements might be needed to make it working.
- The desired db can be put and implemented in model. For e.g, MongoDB, Aerospike (with SSD). The db should support geospatial query and indexes.
The one possible structure in db would be:
key (lat-lon): "{{address}}"
DB must provide some nearby search query option to quickly find nearby lat,lon.

- Swagger.json can be used for quick API documentation.
- Winston Logger can be used to better formatted logging with all required info.
- Some unit Test cases can be written in test folder.
- There are multiple more ways to create and use the classes being created in this exercise.For most purposes, single static object can be used for each class throughout project.

- Business Logic assumes to return address of first nearby location found in db.This logic can change to server nearer and more accurate address to user.
- The Google api call code is not written but can be easily written as its a low level implementation.
- More crons can be written to improve the business logic and accuracy, by fetching address of nearby locations asynchronously.




