import { Badge } from '@/shared/ui/atoms';
import { render, screen } from '@testing-library/react';

it('debe renderizar el badge con el texto', () => {
  render(<Badge label='Activo'/>);

  expect(screen.getByText('Activo')).toBeInTheDocument();
});