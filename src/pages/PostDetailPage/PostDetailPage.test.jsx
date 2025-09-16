import { render, screen } from '@testing-library/react';
import PostDetailPage from '../PostDetailPage/PostDetailPage.jsx';

test('renders Post Detail heading', () => {
    render(<PostDetailPage />);
    expect(screen.getByText(/Post Detail/i)).toBeInTheDocument();
});
