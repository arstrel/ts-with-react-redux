import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  onFetchClick = (): void => {
    this.props.fetchTodos();
  };

  onDeleteClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => (
      <div key={todo.id}>
        <p>{todo.title}</p>
        <p>Completed: {todo.completed ? 'Done' : 'Pending'}</p>
        <button onClick={() => this.onDeleteClick(todo.id)}>
          Delete this one
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <p>Wow! Todos!</p>
        <button onClick={this.onFetchClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
