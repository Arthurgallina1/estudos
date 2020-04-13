// eslint-disable */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//cria um html fake, renderiza um comp q nao existe
import TechList from './TechList';

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, debug } = render(<TechList />);

    debug();
    fireEvent.click(getByText('Adicionar'));

    debug();

    expect(getByTestId('tech-list')).toBeTruthy();
  });
});
