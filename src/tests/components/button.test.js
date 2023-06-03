import { render, screen } from '@testing-library/react';
import Button from '../../components/Button/Button';

describe('Button', () => {
  test('renders button with correct name and style', () => {
    const height = '50px';
    const width = '100px';
    const buttonName = 'Test Button';
    const icon = <i className="fa fa-icon" />; // Replace with your icon component or JSX

    render(
      <Button height={height} width={width} buttonName={buttonName} icon={icon} />
    );

    const button = screen.getByRole('button');

    // Assert that the button name is rendered correctly
    expect(screen.getByText(buttonName)).toBeInTheDocument();

    // Assert that the button has the correct style
    expect(button).toHaveStyle(`height: ${height}`);
    expect(button).toHaveStyle(`width: ${width}`);
  });
});