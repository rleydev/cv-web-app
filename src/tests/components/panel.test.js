import Panel, {usePanelContext} from "../../components/Panel/Panel";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, screen } from '@testing-library/react';

const MockPanelProvider = ({ children }) => {
    const panelState = usePanelContext();
    return <div>{children}</div>;
};
  

  
describe('Panel', () => {
    it('should toggle panel state when panel stick is pressed', () => {
      render(
        <Router>
            <MockPanelProvider>
                <Panel data="John Doe" />
            </MockPanelProvider>
        </Router>
        );


    const panelStick = screen.getByTestId('panel-stick');

    // Initial state
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();

    // Toggle the panel state
    fireEvent.click(panelStick);

    // Toggle the panel state again
    fireEvent.click(panelStick);

    // Restored state
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });

  
});