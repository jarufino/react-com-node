import React, { useState } from 'react'
import './App.css'
import './global.css'
import './sidebar.css'
import './main.css'
import Notes from './Components/Notes'
import api from './services/api'

function App() {
const [title, setTitles]=useState('');
const [notes, setNotes]=useState('');

async function handleSubmit(e){
  e.preventDefault();

  const response=await api.post('/annotations',{
    title,
    notes,
    priority:false
  })
}

return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className='input-block'>
            <label htmlFor='title'>Título da Anotação</label>
            <input required value={title} onChange={e=>setTitles(e.target.value)}/>
          </div>
          <div className='input-block'>
            <label htmlFor="nota">Anotações</label>
            <textarea required value={notes} onChange={e=>setNotes(e.target.value)}></textarea>
          </div>
          <button type='submit'>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes/>
          <Notes/>
          <Notes/>
          <Notes/>
        </ul>
      </main>
    </div>
  );
}

export default App;
