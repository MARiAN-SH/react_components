import React, { Component } from 'react';

import './TodoList.css';

class TodoList extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        description: 'Вивчити HTML',
        completed: false,
      },
      {
        id: 'id-2',
        description: 'Вивчити CSS',
        completed: false,
      },
      {
        id: 'id-3',
        description: 'Вивчити JS',
        completed: false,
      },
      {
        id: 'id-4',
        description: 'Вивчити React',
        completed: false,
      },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  doneTodos = todoId => {
    this.setState(prevState => ({
      completed: prevState.todos.filter(todo =>
        todo.id === todoId ? (todo.completed = true) : false
      ),
    }));
  };
  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <p>Загальна кількість: {todos.length}</p>
        {/* <p>Кількість виконаних: {completedTodos.length}</p> */}
        <p>Кількість виконаних: {completedTodos}</p>

        <ul>
          {todos.map(({ id, description }) => (
            <li key={id} className="TodoList__item">
              <p>{description}</p>
              <button
                onClick={() => {
                  this.deleteTodo(id);
                }}
              >
                Видалити
              </button>
              <button
                onClick={() => {
                  this.doneTodos(id);
                }}
              >
                Виконав
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
