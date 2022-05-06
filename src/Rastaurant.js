import cities from './components/Data';
const rName = ["malhar dosa", "patel Dosa", "avadh", "sadduru chinese", "kansar gujarati thali", "Wok On Fire"];
const rImage = ["category1.jpg", "category2.jpg", "category3.jpg", "category4.jpg",];


var RastaurantDetail = [];

const totalRecord = 100;
for (var i = 1; i <= totalRecord; i++) {
    var data = {};
    data['id'] = i;
    data['rastaurantname'] = rName[Math.floor(Math.random() * rName.length)];
    data['city'] = cities[i];
    data['address'] = "B-2,new Rastaurant ,Adajan," + cities[i] + ", 399339";
    data['image'] = "images/" + rImage[Math.floor(Math.random() * rImage.length)]
    RastaurantDetail.push(data);

}

export default RastaurantDetail