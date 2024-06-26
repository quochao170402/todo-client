import { ReactNode, createContext, useMemo, useState } from "react";

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
  handleFilter: (todoItems: Todo[], type: FilterType) => void;
  handleClearComplete: () => void;
}

const contextType: TodoContextType = {
  items: [],
  filter: [],
  currentFilterType: FilterType.All,
  update: (todo: Todo, isAdd: boolean) => {},
  handleFilter: (todoItems: Todo[], type: FilterType) => {},
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
      handleFilter(current, currentFilterType);
      return current;
    });
  };

  const removeItem = (todo: Todo) => {
    setItems(items.filter((x) => x.id !== todo.id));
    setFilter((prev) => prev.filter((x) => x.id !== todo.id));
  };

  const handleFilter = (todoItems: Todo[], type: FilterType) => {
    setCurrentFilterType(type);
    if (type === FilterType.Active) {
      setFilter(todoItems.filter((item) => !item.state));
    } else if (type === FilterType.Complete) {
      setFilter(todoItems.filter((item) => item.state));
    } else {
      setFilter(todoItems);
    }
  };

  const handleClearComplete = () => {
    setItems((prev) => prev.filter((x) => !x.state));
    setFilter((prev) => prev.filter((x) => !x.state));
  };

  const todoContextValue = useMemo(
    () =>
      ({
        items: items,
        filter: filter,
        currentFilterType,
        update: updateItems,
        handleFilter,
        handleClearComplete,
      } as TodoContextType),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, filter, currentFilterType]
  );
  
  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export { FilterType, TodoContext, TodoProvider };
