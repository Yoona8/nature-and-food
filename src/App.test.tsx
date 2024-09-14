import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.tsx';

describe('App component', () => {
  test('renders without errors', () => {
    render(<App />);
  });
});
