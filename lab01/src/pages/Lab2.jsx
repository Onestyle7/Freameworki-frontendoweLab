import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function Lab2() {
    const { id } = useParams();  
    const person = data.find((p) => p.id === Number(id)); 

    
    if (!id) return <p>Brak identyfikatora osoby.</p>;
    if (!person) return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;

    return (
        <div>
            <h1>Profil osoby</h1>
            <p>Imię: {person.name}</p>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
        </div>
    );
}

export default Lab2;
