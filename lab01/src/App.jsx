import { useState } from 'react';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Page from './pages/Lab1Page';
import PeoplePage from './pages/PeoplePage'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <RootLayout>
      <Routes>
        <Route path='/lab1' element={<Lab1Page />} />
        <Route path='/lab2' element={<h1>Laboratorium 2</h1>} />
        <Route path='/people/:id' element={<PeoplePage />} /> 
      </Routes>
    </RootLayout>
  );
}

export default App;
