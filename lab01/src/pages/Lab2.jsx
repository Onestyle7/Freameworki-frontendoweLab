import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function Lab2() {
    const { id } = useParams();  
    const person = data.find((p) => p.id === Number(id)); 

    /* const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(person?.name || '');
    const [rating, setRating] = useState(person?.rating || 0); */
    
    if (!id) return <p>Brak identyfikatora osoby.</p>;
    if (!person) return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;

    const handleEdit = () =>{
        console.log(`Edytuj osobę o id ${id}`);
    }
    const handleDelete = () =>{
        console.log(`Usuń osobę o id ${id}`);
    }
    const handleRate = () =>{
        console.log(`Oceń osobę o id ${id}`);
    }

    return (
        <div>
        <div>
            <h1>Profil osoby</h1>
            <p>Imię: {person.name}</p>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
        </div>

        <div>
            <button onClick={handleEdit}>Edytuj</button>
            <button onClick={handleDelete}>Usuń</button>
            <button onClick={handleRate}>Oceń</button>
        </div>
        </div>
    );
}

export default Lab2;
