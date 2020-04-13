// eslint-disable */
import { render, fireEvent } from '@testing-library/react';
//cria um html fake, renderiza um comp q nao existe
import TechList from '../Components/TechList';

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText } = render(<TechList />);

    fireEvent.click(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
  });
});
