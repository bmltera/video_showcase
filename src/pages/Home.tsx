
import { Button } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import React from "react";

export default function Home() {
    const [goToGallery, setGoToGallery] = React.useState(false);

    if(goToGallery){
        return <Navigate to ="/gallery"/>;
    }

    return (
        <div style={{ width: '1280px' }}>
            <div className="parent-video">
                <div className="child-video">
                    <div className="home-text1">
                        Hi there! I'm Bill, a videographer specializing in dance videography and short films/documentaries.
                    </div>
                    <div>
                        <div style={{ margin: "2rem" }} />
                        <Button 
                            onClick={() => {
                                setGoToGallery(true);
                            }}
                            >
                            VIEW GALLERY
                        </Button>
                    </div>
                </div>
                <div className="child-video">
                    <img src="/banner2.png" width="580" />
                </div>
            </div>
            <div className="home-text2" style={{ margin: "2rem 8rem" }}>
                My passion lies in bringing visions to life for individuals and businesses seeking to connect with their audience.
                <br />
                <div style={{ margin: "2rem" }} />
                I thrive on  captivating visual stories and I would be thrilled to collaborate with you on your next project. Feel free to ask me any questions or share your ideas—I'm here to help!
                <br />
                <div style={{ margin: "2rem" }} />
                Let's create something extraordinary together!</div>
        </div>
    );
}