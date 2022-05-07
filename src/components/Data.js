import cities from 'cities.json';
let indianCities = [];
for (var i = 0; i < cities.length; i++) {
    if (cities[i].country === "IN") {
        indianCities.push(cities[i].name);
    }
}
export default indianCities;

