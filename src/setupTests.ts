import '@testing-library/jest-dom';

// jest-canvas-mock used to support use of lottie-web during tests
import "jest-canvas-mock";

// Strings to use their translation key as their value during tests.
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

// Mock window.watchMedia
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});