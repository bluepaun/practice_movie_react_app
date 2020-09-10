import React from "react";

function Food({ fav }) {
    return <h5>I love {fav}!</h5>;
}

const foodLikes = [
    { name: "kimchi" },
    { name: "pizza" },
    { name: "hamburger" },
];

const testJsxList = foodLikes.map((food, index) => {
    return <Food fav={food.name} key={index} />;
});

function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>
            {foodLikes.map((food, index) => {
                return <Food fav={food.name} key={index} />;
            })}
            {testJsxList}
            <Food fav="kimchi" something={true} papa={["hello", 1, 2, 3, 4]} />
            <Food fav="ramen" />
            <Food fav="hamguger" />
        </div>
    );
}

export default App;
