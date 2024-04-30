import { createContext, useState, ReactNode, useContext } from "react";

enum FilterType {
  All = "All",
  Active = "Active",
  Complete = "Complete",
}

export interface TodoContextType {
  items: Todo[];
  filter: Todo[];
  currentFilterType: FilterType;
  update: (todo: Todo, isAdd: boolean) => void;
  handleFilter: (type: FilterType) => void;
  handleClearComplete: () => void;
}

const contextType: TodoContextType = {
  items: [],
  filter: [],
  currentFilterType: FilterType.All,
  update: (todo: Todo, isAdd: boolean) => {},
  handleFilter: (type: FilterType) => {},
  handleClearComplete: () => {},
};

const TodoContext = createContext<TodoContextType>(contextType);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Todo[]>(items);
  const [currentFilterType, setCurrentFilterType] = useState(FilterType.All);
  const updateItems = (todo: Todo, isAdd: boolean) => {
    isAdd ? addItem(todo) : removeItem(todo);
  };

  const addItem = (todo: Todo) => {
    setItems((prev) => {
      const current = [todo, ...prev];
      setFilter(current);
      return current;
    });
  };

  const removeItem = (todo: Todo) => {
    setItems(items.filter((x) => x.id !== todo.id));
    setFilter((prev) => prev.filter((x) => x.id !== todo.id));
  };

  const handleFilter = (type: FilterType) => {
    setCurrentFilterType(type);
    if (type === FilterType.Active) {
      setFilter(items.filter((item) => !item.state));
    } else if (type === FilterType.Complete) {
      setFilter(items.filter((item) => item.state));
    } else {
      setFilter(items);
    }
  };

  const handleClearComplete = () => {
    setItems((prev) => prev.filter((x) => !x.state));
    setFilter((prev) => prev.filter((x) => !x.state));
  };
  return (
    <TodoContext.Provider
      value={{
        items: items,
        filter: filter,
        currentFilterType,
        update: updateItems,
        handleFilter,
        handleClearComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider, FilterType };
