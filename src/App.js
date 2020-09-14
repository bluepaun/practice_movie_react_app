import React from "react";

function Food({ fav }) {
    return <h5>I love {fav}!</h5>;
}

const foodLikes = [
    {
        id: 1,
        name: "kimchi",
    },
    {
        id: 2,
        name: "pizza",
    },
    {
        id: 3,
        name: "hamburger",
    },
];

const testJsxList = foodLikes.map((food, index) => {
    return <Food fav={food.name} key={index} />;
});

const renderFood = (dish, index) => {
    return <Food fav={dish.name} key={dish.id} />;
};

function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>
            {foodLikes.map(renderFood)}
            {testJsxList}
            <Food fav="kimchi" something={true} papa={["hello", 1, 2, 3, 4]} />
            <Food fav="ramen" />
            <Food fav="hamguger" />
        </div>
    );
}

export default App;
