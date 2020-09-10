import React from "react";

function Food({ fav }) {
    return <h5>I love {fav}!</h5>;
}
function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>
            <Food fav="kimchi" something={true} papa={["hello", 1, 2, 3, 4]} />
            <Food fav="ramen" />
            <Food fav="hamguger" />
        </div>
    );
}

export default App;
