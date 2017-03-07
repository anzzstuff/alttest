import connectToStores from 'alt-utils/lib/connectToStores';
import React from 'react';
import TesterStore from '../Stores/TesterStore';
import TesterActions from '../Actions/TesterActions';
import { Button } from 'react-bootstrap';

class TesterComponent extends React.Component {
  static getStores() {
    return [TesterStore];
  }

  static getPropsFromStores() {
    return TesterStore.getState();
  }

  doTheThing() {
      TesterActions.updateTodo(Math.random(), 'boo');
  }

  render() {
    return (
      <div>
        are we here?
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li key={todo.id}>{todo.text}</li>
            );
          })}
        </ul>
              <Button
                bsStyle="success"
                bsSize="small"
                onClick={this.doTheThing}
                >
                Clicka here to add
              </Button>
      </div>
    );
  }
}
export default connectToStores(TesterComponent);