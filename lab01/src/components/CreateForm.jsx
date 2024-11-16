import React, { useState, useContext } from 'react';
import AppContext from "../data/AppContext";

export default function CreateForm() {
    const [errors, setErrors] = useState([]); 
    const [isSending, setSending] = useState(false); 
    const { dispatch } = useContext(AppContext); 

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const taskName = data.get("taskName");

        
        if (taskName.charAt(0) !== taskName.charAt(0).toUpperCase()) {
            setErrors([...errors, "Nazwa zadania musi zaczynać się wielką literą!"]);
            return;
        }

        // Jeśli błędów brak, wysyłamy dane
        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Symulacja wysyłki (np. fetch, axios)

        dispatch({
            type: "add",
            item: {
                id: Date.now(), 
                name: taskName,
                createdAt: new Date().toISOString(), 
            },
        });

        setSending(false);

        
        e.target.reset();
        setErrors([]); 
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                
                <label htmlFor="taskName">Nazwa zadania</label>
                <input
                    required
                    minLength="3"
                    maxLength="40"
                    name="taskName"
                    type="text"
                    id="taskName"
                    placeholder="Wpisz nazwę zadania"
                />

                
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}

                
                <button type="submit" disabled={isSending}>
                    {isSending ? "Zapisuję..." : "Zapisz"}
                </button>
                <button type="reset">Wyczyść</button>
            </form>
        </>
    );
}
