import React, { FC } from 'react';
import { useQuery } from 'react-query';

type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const todoItemsQueryKey = 'todoListItemsData';

export const TodoList: FC = () => {
  const { isLoading, error, data } = useQuery<TodoItem[]>(todoItemsQueryKey, () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
      response.json()
    )
  );

  if (isLoading) return <div>Loading</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <ul>
        {data.map((todoItem: TodoItem) => (
          <li key={todoItem.id}>{todoItem.title}</li>
        ))}
      </ul>
    </div>
  );
};
