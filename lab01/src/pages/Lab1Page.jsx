import { data } from '../data/module-data';   

const NameItem = ({ name }) => <li>{name}</li>;

function Lab1Page() {
    return (
        <>
        <h1>Laboratorium 1</h1>
        <ul>
        {data.map(person => <NameItem key={person.id} name={person.name} />)}
        </ul>
        </>
    );
}

export default Lab1Page;
