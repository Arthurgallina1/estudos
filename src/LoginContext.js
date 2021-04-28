/* eslint-disable import/prefer-default-export */
import React, { createContext, useState, useContext } from 'react';

export const LoginContext = createContext(null);

const TestContext = createContext({});

export const useTestContext = () => useContext(TestContext);

export function TestContextProvider({ children }) {
  const [multipleState, setMultipleState] = useState({
    isSelecting: false,
    isSharing: false,
  });
  // const [isSharing, setIsSharing] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  return (
    <TestContext.Provider
      value={{
        multipleState,
        setMultipleState,
        // isSharing,
        // setIsSharing,
        isSelecting,
        setIsSelecting,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

const TestContextTwo = createContext({});

export const useTestContextTwo = () => useContext(TestContextTwo);

export function TestContextTwoProvider({ children }) {
  const [multipleState, setMultipleState] = useState({
    isSelecting: false,
    isSharing: false,
  });
  const [isSharing, setIsSharing] = useState(false);
  // const [isSelecting, setIsSelecting] = useState(false);

  return (
    <TestContextTwo.Provider
      value={{
        multipleState,
        setMultipleState,
        isSharing,
        setIsSharing,
        // isSelecting,
        // setIsSelectin+g,
      }}
    >
      {children}
    </TestContextTwo.Provider>
  );
}
