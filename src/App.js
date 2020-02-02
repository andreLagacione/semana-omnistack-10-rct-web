import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

/*
  criar o update e delete dos registros
*/

function App() {
  
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  async function handleEditDev(devId) {
    const response = await api.get(`/devs/${devId}`);
    console.log(response);
  }

  async function handleDeleteDev(devId) {
    alert('remove dev: ' + devId);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onEditDev={handleEditDev} onDeleteDev={handleDeleteDev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
