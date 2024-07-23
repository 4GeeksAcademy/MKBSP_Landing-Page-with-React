import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbo.jsx";
import Card from "./card.jsx";
import cardData from "./cardData"; 

const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <Jumbotron />
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-3 mb-4" key={index}>
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
