// eslint-disable */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
//cria um html fake, renderiza um comp q nao existe
import TechList from './TechList';

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new tech', () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <TechList />
    );

    // debug();
    // <label htmlFor="tech"> Tech </label> getByLabelText que ai pega o input
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    // fireEvent.click(getByText('Adicionar'));
    // debug();

    expect(getByTestId('tech-list')).toBeTruthy();
    // expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('should store techs in storage', () => {
    // let { getByText, getByTestId, debug, getByLabelText } = render(
    //   <TechList />
    // );

    // //Limpar tudo e rendizar do 0;
    // //NEsse caso limpar a lista e ver se a info está no storage.
    // cleanup();

    let { getByTestId, getByLabelText, getByText } = render(<TechList />);
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    //testa se isso está sendo chamado, se o componente está se comunicando com o localStorage.
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'techs',
      JSON.stringify(['Node.js'])
    );
    expect(getByTestId('tech-list')).toBeTruthy();
  });
});

describe('Test redux', () => {
  it('should be able to use redux', () => {});
});
