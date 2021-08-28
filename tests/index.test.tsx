import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react';

it('hello react', () => {
let el = render(<App />);
});

// import {test, expect, describe} from '@jest/globals';
// describe('testing describe', () => {
//   beforeEach(() => {
//     console.log(123);
//   });
//   afterEach(() => {
//     console.log(456);
//   });
//   test('should return 0', () => {
//     expect(0).toBe(0);
//   });
// });
