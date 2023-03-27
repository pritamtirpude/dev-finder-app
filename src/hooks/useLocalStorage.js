import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [themeValue, setThemeValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        typeof themeValue === "function" ? themeValue(themeValue) : themeValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, themeValue]);

  return [themeValue, setThemeValue];
};

export default useLocalStorage;
