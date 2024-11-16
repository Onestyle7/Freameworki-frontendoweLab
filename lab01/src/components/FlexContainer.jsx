import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import AppContext from "../data/AppContext";

export default function FlexContainer({ element: Element }) {
  const { items, dispatch } = useContext(AppContext);

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id} md={4} className="d-flex justify-content-center mb-4">
          <Element {...item} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}
