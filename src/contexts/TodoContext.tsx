import { createContext, useState, ReactNode } from "react";

enum FilterType {
  All,
  Active,
  Complete,
}
export interface TodoContextType {
  items: Todo[];
  filter: Todo[];
  update: (todo: Todo, isAdd: boolean) => void;
  handleFilter: (type: FilterType) => void;
}

const contextType: TodoContextType = {
  items: [],
  filter: [],
  update: (todo: Todo, isAdd: boolean) => {},
  handleFilter: (type: FilterType) => {},
};

const TodoContext = createContext<TodoContextType>(contextType);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Todo[]>(items);

  const updateItems = (todo: Todo, isAdd: boolean) => {
    isAdd ? addItem(todo) : removeItem(todo);
  };

  const addItem = (todo: Todo) => {
    setItems([todo, ...items]);
  };

  const removeItem = (todo: Todo) => {
    setItems(items.filter((x) => x.id !== todo.id));
  };

  const handleFilter = (type: FilterType) => {
    if (type === FilterType.Active) {
      setFilter(items.filter((item) => !item.state));
    } else if (type === FilterType.Complete) {
      setFilter(items.filter((item) => item.state));
    } else {
      setFilter(items);
    }
  };
  console.log("🚀 ~ filter:", filter);

  return (
    <TodoContext.Provider
      value={{
        items: items,
        filter: filter,
        update: updateItems,
        handleFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider, FilterType };
