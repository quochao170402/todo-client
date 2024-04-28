import { createContext, useState, ReactNode } from "react";

export interface TodoContextType {
  items: Todo[];
  update: (todo: Todo, isAdd: boolean) => void;
}

const contextType: TodoContextType = {
  items: [],
  update: (todo: Todo, isAdd: boolean) => {
    if (isAdd) {
      console.log(todo);
    } else {
      console.log(todo);
    }
  },
};

const TodoContext = createContext<TodoContextType>(contextType);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Todo[]>([]);

  const updateItems = (todo: Todo, isAdd: boolean) => {
    isAdd ? addItem(todo) : removeItem(todo);
  };

  const addItem = (todo: Todo) => {
    setItems([todo, ...items]);
  };

  const removeItem = (todo: Todo) => {
    setItems(items.filter((x) => x.id !== todo.id));
  };

  // Other context-related functions

  return (
    <TodoContext.Provider value={{ items: items, update: updateItems }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
