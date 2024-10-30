import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function PeoplePage() {
    const { id } = useParams();
    console.log("Parametr ID:", id); 

    const person = data.find(person => person.id === Number(id)); 
    console.log("Znaleziono osobę:", person); 

    return (
        <>
        <h1>Szukane imię</h1>
        {person ? (
            <p>{person.name}</p>
        ) : (
            <p><span>Brak takiego imienia</span></p>
        )}
        </>
    );
}

export default PeoplePage;
