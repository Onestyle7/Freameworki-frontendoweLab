import React, { useContext, useState } from "react";
import AppContext from "../data/AppContext";
import Item from "../components/Item";
import AddForm from "../components/AddForm";
import EditForm from "../components/EditForm";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function Lab4() {
  const { items } = useContext(AppContext); // Pobieramy listę z kontekstu
  const [showAddForm, setShowAddForm] = useState(false); // Sterowanie widocznością formularza dodawania
  const [currentItem, setCurrentItem] = useState(null); // Obiekt edytowany

  const handleAddClick = () => {
    setShowAddForm(true);
    setCurrentItem(null); // Resetuj formularz edycji
  };

  const handleEditClick = (item) => {
    setShowAddForm(false);
    setCurrentItem(item); // Ustaw obiekt do edycji
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setCurrentItem(null); // Zamknij formularze
  };

  return (
    <Container>
      <h1 className="my-4 text-center">Laboratorium 4</h1>

      {/* Przycisk dodawania */}
      {!showAddForm && !currentItem && (
        <Button variant="primary" className="mb-4" onClick={handleAddClick}>
          Dodaj
        </Button>
      )}

      {/* Formularz dodawania */}
      {showAddForm && (
        <div className="mb-4">
          <AddForm />
          <Button variant="secondary" className="mt-3" onClick={handleCancel}>
            Anuluj
          </Button>
        </div>
      )}

      {/* Formularz edycji */}
      {currentItem && (
        <div className="mb-4">
          <EditForm item={currentItem} />
          <Button variant="secondary" className="mt-3" onClick={handleCancel}>
            Anuluj
          </Button>
        </div>
      )}

      {/* Lista obiektów */}
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={4} sm={6} className="mb-4">
            <Item {...item} onEditClick={() => handleEditClick(item)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
