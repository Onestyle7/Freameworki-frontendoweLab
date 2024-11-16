import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Lab4() {
    const navigate = useNavigate();
  return (
<>
<button onClick={e => navigate("/lab4/add")}>Dodaj</button>
</>  
)
}
