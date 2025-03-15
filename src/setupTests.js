import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers
import App from './App'; // Adjust the import based on your file structure

describe('App Component', () => {
    test('renders Vite + React text', () => {
        render(<App />);
        const headerElement = screen.getByText(/Vite \+ React/i);
        expect(headerElement).toBeInTheDocument(); // This should now work
    });

    test('increments count on button click', () => {
        render(<App />);
        const buttonElement = screen.getByText(/count is 0/i);
        expect(buttonElement).toBeInTheDocument(); // This should now work
        fireEvent.click(buttonElement);
        // Add further assertions to check the incremented count
    });
});