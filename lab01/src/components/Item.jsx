import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"; // Dodano grupę przycisków
import RatingBar from "./RatingBar";
import AppContext from "../data/AppContext";

export default function Item({ name, id, rating, onEditClick }) {
  const { dispatch } = useContext(AppContext);

  const handleRate = () => {
    dispatch({
      type: "rate",
      id,
      rating: rating < 10 ? rating + 1 : 0,
    });
  };

  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-center">{name}</Card.Title>
          <div className="text-center">
            <RatingBar rate={rating} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm" onClick={onEditClick}>
              Edit
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => dispatch({ type: "delete", id })}
            >
              Delete
            </Button>
            <Button variant="outline-success" size="sm" onClick={handleRate}>
              Rate
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
