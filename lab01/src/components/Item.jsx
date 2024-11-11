import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import RatingBar from "./RatingBar";

export default function Item({ name, id, rating, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleRate = () => {
    dispatch({
      type: "rate",
      id: id,
      rating: rating < 10 ? rating + 1 : 0,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: "edit",
      id: id,
      name: newName,
    });
    setIsEditing(false);
  };

  return (
    <Card
      style={{ width: "10rem" }}
      className="border mb-2 p-2 ms-2 shadow-sm"
      key={id}
    >
      <Card.Body>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleSave} // Zapisz po opuszczeniu pola
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
        ) : (
          <Card.Title>{name}</Card.Title>
        )}
        <RatingBar rate={rating} />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => dispatch({ type: "delete", id })}>Delete</button>
        <button onClick={handleRate}>Rate</button>
      </Card.Body>
    </Card>
  );
}
