import { render, screen } from '@testing-library/react';
import AuthorPostsPage from '../AuthorPostsPage.jsx';

test('renders Posts by Author heading', () => {
    render(<AuthorPostsPage />);
    expect(screen.getByText(/Posts by Author/i)).toBeInTheDocument();
});
