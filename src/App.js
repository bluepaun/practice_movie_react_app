import React from "react";
import PropTypes from "prop-types";

function Food({ fav, rating }) {
    return (
        <div>
            <h5>I love {fav}!</h5>
            <h5>rating : {rating}</h5>
        </div>
    );
}

Food.propTypes = {
    fav: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

const foodLikes = [
    {
        id: 1,
        name: "kimchi",
        rating: 5,
    },
    {
        id: 2,
        name: "pizza",
        rating: 3.4,
    },
    {
        id: 3,
        name: "hamburger",
        rating: 1.0,
    },
];

const renderFood = (dish, index) => {
    return <Food key={dish.id} fav={dish.name} rating={dish.rating} />;
};

function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>
            {foodLikes.map(renderFood)}
        </div>
    );
}

export default App;
