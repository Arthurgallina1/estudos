import React, { useReducer, useEffect } from 'react';
import './styles.scss';
import useFetch from '../CustomHook';

// a função reducer sempre precisa retornar alguam coisa => o retorno dela é o state atualizado
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { clicks: state.clicks + 1, counter: state.counter + 1 };

    case 'DECREMENT':
      return { clicks: state.clicks - 1, counter: state.counter - 1 };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

export default function UseReducer() {
  const [loading, response] = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  //1o função reducer que recebe (state, action)
  //2o argumento um estado inicial
  //3o uma função initializer que é o initialValue do reducer (msm valor do 2o argumento)
  // essa função executa apenas um vez qdn o comp é montado na tela. ela retorna o valor
  // que de fato será o initialValue do reducer

  //retorna o valor do estado e a função(Dispatch)
  const [state, dispatch] = useReducer(
    reducer,
    initialValue
    // function (initialValue) {
    //   return { name: initialValue };
    // }
  );

  if (loading) {
    return <h1>loading...</h1>;
  }

  console.log(loading, response);

  const handlePlus = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleMinus = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
