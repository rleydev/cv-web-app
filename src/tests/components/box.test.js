import React from 'react';
import { render , screen} from '@testing-library/react';
import Box from '../../components/Box/Box';

describe('Box', () => {
  it('renders the title and content', () => {
    const title = 'Test Title';
    const content = 'Test Content';
    render(<Box title={title} content={content} />);
    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});