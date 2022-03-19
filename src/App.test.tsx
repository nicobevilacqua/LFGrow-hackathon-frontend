import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import App from './App';

describe('App', function () {
  it('should display pass in number', function () {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App num={191} />, container);
    });
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button.textContent).toBe(`count is: ${191}`);
  });
});
