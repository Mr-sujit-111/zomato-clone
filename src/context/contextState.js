import { useEffect, useState } from 'react';
import ZomatoContext from './context';

const ZomatoState = (props) => {

    const [foodCardData, setFoodCardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://fakestoreapi.com/products?limit=20";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let data = await response.json();

            var datasets = [];
            data.map((element, index) => {
                const { id, price } = element

                const category = ["punjabi", "chinese", "dosa", "manchurian", "pizza", "Burger"];
                const RastaurantName = ["La Pino'z PizzaIce-cream", "McDonald's", "Radhe Dhokla", "Bismillah", "Domino's Pizza", "Kailash Sweets & Snacks", "Mahesh Pav Bhaji"];

                let item = {};
                item["id"] = id;
                item["price"] = parseInt(price);
                item["rating"] = element.rating.rate;
                item["offertitle"] = randomIntFromInterval(1, 50);
                item["offerpr"] = randomIntFromInterval(1, 30);
                item["offerrs"] = randomIntFromInterval(100, 200);
                item["time"] = randomIntFromInterval(10, 60);
                item["RastaurantName"] = RastaurantName[Math.floor(Math.random() * RastaurantName.length)];
                datasets.push(item);
                item["category"] = category[Math.floor(Math.random() * category.length)];
                datasets.push(item);
                setFoodCardData(datasets)
                return `key = { index }`
            })

            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
        }
        fetchData()
    }, []);

    /* for sort rastaurant by time */
    const applyFilterTime = (name) => {
        foodCardData.sort((a, b, name) => {
            return a.time - b.time
        });
    }

    /* for sort rastaurant by rating */
    const filterByRating = (name) => {
        foodCardData.sort((a, b, name) => {
            return b.rating - a.rating
        });
    }

    return (
        <ZomatoContext.Provider value={{ foodCardData, applyFilterTime, filterByRating }}>
            {props.children}
        </ZomatoContext.Provider>
    )
}

export default ZomatoState;