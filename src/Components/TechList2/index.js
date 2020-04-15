import React, { useState, useEffect } from 'react';

export default function TechListRedux() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState([]);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  });

  function handleAddTech() {
    setTechs([...techs, newTech]);
  }
  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
