import React, { Component } from "react";
import { Card } from "react-bootstrap";

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
              {movie.title} {movie.id}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
