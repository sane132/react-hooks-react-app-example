import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Add this import
import App from '../components/App';

describe('App Component', () => {
  test('should display "Now" in the header', () => {
    render(<App />);
    const headerElement = screen.getByText('Now');
    expect(headerElement).toBeInTheDocument();
  });

  test('should include the ExampleComponent', () => {
    render(<App />);
    const exampleElement = screen.getByText('Whoa!');
    expect(exampleElement).toBeInTheDocument();
  });

  test('should include the TestComponent', () => {
    render(<App />);
    const testElement = screen.getByText('This is our new test component');
    expect(testElement).toBeInTheDocument();
  });
});