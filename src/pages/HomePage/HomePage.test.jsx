import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage/HomePage.jsx';

test('renders HomePage heading', () => {
    render(<HomePage />);
    expect(screen.getByText(/Microblog Posts/i)).toBeInTheDocument();
});
