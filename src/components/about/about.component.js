import React from "react";
import CardComponent from "../card/card";
import { Container } from "@mui/material";
import { isMobile } from "react-device-detect";
import "./about.component.css";

const AboutComponent = () => {
 
    const getBody = () => {
        return (
            <div className="subHeading">
                {`Technologies to use: Nodejs + koa/express for backend, React + Redux for frontend, webpack+babel for bundling, and any UI library to make frontend presentable [ eg. AntDesign, Bootstrap, Carbon, Grommet, Atlaskit, CoreUI etc ]\n\nInstructions:`}
                <ul>
                    <li>
                        Scrape content from https://www.mohfw.gov.in/ Note: Do not scrape website for every client request, find a way to minimise the number of scrapes and still show the latest data
                        on your PWA. <span className="success">Done</span>
                    </li> 
                    <li>You can store the data in-memory or to a file on your server, no need to use any persistent database. <span className="success">Done</span></li>
                    <li>Visualise the data on the frontend in a presentable manner.  <span className="success">Done</span></li>
                    <li>The application should be responsive, i.e. should display properly on mobile, tablets and desktop. <span className="success">Done</span></li>
                    <li>Implement service workers and cache results for 2 minutes on the client side using service workers. <span className="success">Done</span></li>
                    <li>Share the endpoint URL (if hosted) and github repository.  <span className="success">Done</span></li>
                    <li>Bonus points for deploying the project on https://www.heroku.com/ or any other free service for live demo purposes. <span className="success">Done</span></li>
                    <li>Bonus points for making the data interactive [ sorting, filtering etc.] <span className="success">Done</span></li>
                    <li>Bonus points for visualising the same data on an interactive map. <span className="success">(Used graphs to visualise)</span></li>
                    <li>Bonus for not using create-react-app or any similar boilerplate and coding from scratch. <span className="success">Done</span></li>
                </ul>
            </div>
        );
    };

    return (
        <div className="about_container" >
            <Container>
                <div style={{ marginBottom: isMobile?"240px":""}}>

                <CardComponent heading="Task: Create a corona-case tracking PWA" body={getBody()} />
                </div>
            </Container>
        </div>
    );
};

export default AboutComponent;
