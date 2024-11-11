import React, { useReducer } from "react";
import { Row, Col } from "react-bootstrap";
import AppReducer from "../data/AppReducer";

export default function FlexContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <Row>
      {items.map((item) => (
        <Col
          key={item.id}
          md={4}
          className="d-flex justify-content-center mb-4"
        >
          <Element {...item} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}
