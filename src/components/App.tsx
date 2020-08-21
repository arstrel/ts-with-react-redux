import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = {
    fetching: false,
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onFetchClick = (): void => {
    this.setState({ fetching: true });
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
        {this.state.fetching ? <div>Loading.... </div> : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
