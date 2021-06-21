import React from 'react';
import { authStore } from '../../store';

export default function Zustand() {
  return (
    <div className="">
      <Bear />
      <RenderCount />
      <List />
    </div>
  );
}

function Controls() {
  console.log('control');
  const increasePopulation = authStore((state) => state.increasePopulation);
  const res = authStore((state) => state.res);
  const fetch = authStore((state) => state.fetch);
  const type = authStore((state) => state.type);
  const getAll = authStore((state) => state.getAll);

  const handleInput = (e) => {
    const value = e.target.value;
    console.log(res);
    type(value);
  };
  return (
    <>
      <button onClick={fetch}>one up</button>
      <input onChange={handleInput} placeholder="type" />
    </>
  );
}

function RenderCount() {
  console.log('rerender');
  const getFetched = authStore((state) => state.getFetched);
  return <button onClick={getFetched}> tele snea </button>;
}

function Bear() {
  const bears = authStore((state) => state.bears);
  return (
    <div>
      <h1>{bears} around here ...</h1>
      <Controls />
    </div>
  );
}

function List() {
  const res = authStore((state) => state.res);
  return (
    <div>
      {res.length > 0 ? res.map((res) => <p>{res.title}</p>) : 'No Res'}
    </div>
  );
}
