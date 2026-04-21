import '@testing-library/jest-dom';

Object.defineProperty(global.crypto, 'randomUUID', {
  value: () => 'test-id',
});