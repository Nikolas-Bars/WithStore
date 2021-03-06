import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import SamuraiJSApp from "./App";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJSApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});
