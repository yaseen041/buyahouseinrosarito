import React, { createContext, useState, useContext, useEffect } from 'react';

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [isSquareMeter, setIsSquareMeter] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUnit = localStorage.getItem('unit');
      if (savedUnit !== null) {
        setIsSquareMeter(JSON.parse(savedUnit)); 
      }
    }
  }, []);

  const toggleUnit = () => {
    setIsSquareMeter(prevState => {
      const newUnit = !prevState;
      if (typeof window !== 'undefined') {
        localStorage.setItem('unit', JSON.stringify(newUnit)); 
      }
      return newUnit;
    });
  };

  return (
    <UnitContext.Provider value={{ isSquareMeter, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export const useUnitContext = () => useContext(UnitContext);
