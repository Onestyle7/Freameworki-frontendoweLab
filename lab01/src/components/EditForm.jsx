import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container, Row, Col } from "react-bootstrap";
import AppContext from "../data/AppContext";

export default function EditForm({ item }) {
  const { dispatch } = React.useContext(AppContext);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Imię musi mieć co najmniej 3 znaki")
      .required("Imię jest wymagane"),
    birth: Yup.date().required("Data urodzenia jest wymagana"),
    eyes: Yup.string()
      .oneOf(
        ["niebieskie", "zielone", "brązowe", "szare"],
        "Nieprawidłowy kolor oczu"
      )
      .required("Kolor oczu jest wymagany"),
    rating: Yup.number()
      .min(0, "Ocena musi być większa lub równa 0")
      .max(10, "Ocena musi być mniejsza lub równa 10")
      .required("Ocena jest wymagana"),
  });

  const handleSubmit = (values) => {
    dispatch({
      type: "edit",
      id: item.id,
      ...values,
    });
    alert("Obiekt został zaktualizowany!");
  };

  return (
    <Container>
      <h2 className="text-center my-4">Edytuj Obiekt</h2>
      <Formik
        initialValues={{
          name: item.name,
          birth: item.birth,
          eyes: item.eyes,
          rating: item.rating,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Row className="mb-3">
              <Col>
                <label htmlFor="name">Imię:</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label htmlFor="birth">Data urodzenia:</label>
                <Field name="birth" type="date" className="form-control" />
                <ErrorMessage
                  name="birth"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label htmlFor="eyes">Kolor oczu:</label>
                <Field as="select" name="eyes" className="form-control">
                  <option value="">Wybierz...</option>
                  <option value="niebieskie">Niebieskie</option>
                  <option value="zielone">Zielone</option>
                  <option value="brązowe">Brązowe</option>
                  <option value="szare">Szare</option>
                </Field>
                <ErrorMessage
                  name="eyes"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label htmlFor="rating">Ocena:</label>
                <Field name="rating" type="number" className="form-control" />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>

            <Button type="submit" variant="success" disabled={isSubmitting}>
              {isSubmitting ? "Zapisywanie..." : "Zapisz"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
