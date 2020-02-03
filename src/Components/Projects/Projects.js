import React, { Component } from "react";
import SingleProject from "./SingleProject/SingleProject";
import "./Projects.css";
import projectOne from "../../Media/Projects/rocketball.png";
import projectTwo from "../../Media/Projects/lolbuilder.png";
import projectThree from "../../Media/Projects/legendsapi.png";
import projectFour from "../../Media/Projects/silvershackcoins.png";

class Projects extends Component {
  render() {
    return (
      <div className="projects_out">
        <div className="projects_wrapper">
          <SingleProject
            img={projectFour}
            title="Silver Shack Coins"
            description="
            E-commerce online shop for client built in React with an express backend
                    "
            url="https://silvershackcoins.netlify.com/"
            repo="https://github.com/majicmaj/silvershackcoin"
          />
          <SingleProject
            img={projectOne}
            title="Rocket Ball"
            description="
            A Javascript browser 2D jet-engine cars soccer game with a giant ball using Matter.js
                    "
            url="https://majicmaj.github.io/"
            repo="https://github.com/majicmaj/rocketball"
          />
          <SingleProject
            img={projectTwo}
            title="Team Builder"
            description="
            a React full-stack application based on data from datadragon that allows you to create teams and compare the stats of different compositions.
                    "
            url="https://lolbuilder.netlify.com"
            repo="https://github.com/majicmaj/lol-builder"
          />
          <SingleProject
            img={projectThree}
            title="LegendsAPI"
            description="
            Uses the latest NA patch(version) json data and maps summaries out of them to create some data about champions, items, and maps.
                    "
            url="https://lolbuilder.herokuapp.com/"
            repo="https://github.com/majicmaj/legendsapi"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
