import { createContext } from "react";
const items: Todo[] = [];

export const ThemeContext = createContext("light");
export const TodoContext = createContext(items);
