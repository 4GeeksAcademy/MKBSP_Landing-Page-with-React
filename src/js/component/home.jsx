import React from "react";
import NavBar from "./navbar.jsx"; // Correct import path
import Jumbotron from "./jumbo.jsx"; // Correct import path
import Card from "./card.jsx"; // Correct import path

const Home = () => {
    const cardsData = [
        {
            image: "path/to/image1.jpg",
            title: "Card 1",
            text: "This is the first card.",
            link: "#"
        },
        {
            image: "path/to/image2.jpg",
            title: "Card 2",
            text: "This is the second card.",
            link: "#"
        },
        {
            image: "path/to/image3.jpg",
            title: "Card 3",
            text: "This is the third card.",
            link: "#"
        }
    ];

    return (
        <div className="container">
            <NavBar />
            <Jumbotron />
            <div className="row">
                {cardsData.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <Card 
                            image={card.image} 
                            title={card.title} 
                            text={card.text} 
                            link={card.link} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
