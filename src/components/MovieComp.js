import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./MovieComp.css";

// Props
// actor. an instance of ActorModel
export default class MovieComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <Card>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>
              <span className="titles">Title : </span>
              {"  " + movie.title},
              <br />
              <span className="titles">Length :</span>{" "}
              {"  " + movie.runtime + " "} minutes,
              <br /> <span className="titles">Actor 1st :</span>
              {"  " + movie.firstMainStars}, <br />
              <span className="titles">Actor 2nd :</span>
              {"  " + movie.secondMainStars}
              <br />
              <span className="titles"> Actor 3th :</span>
              {"  " + movie.thirdMainStars}.
              <br />
              <span className="titles">Director :</span>
              {"  " + movie.director}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
