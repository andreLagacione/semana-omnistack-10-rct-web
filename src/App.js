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
  const [editDev, setEditDev] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    console.log(data);
    let response;

    if (data.id) {
      response = await api.put('/devs', data);
    } else {
      response = await api.post('/devs', data);
    }
    
    setDevs([...devs, response.data]);
  }

  async function handleEditDev(devId) {
    const response = await api.get(`/devs/${devId}`);
    setEditDev(response.data);
  }

  async function handleDeleteDev(devId) {
    alert('remove dev: ' + devId);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} editDev={editDev} />
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
