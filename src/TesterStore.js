import alt from './alt';
import TesterActions from './TesterActions'
import chromeDebug from 'alt-utils/lib/chromeDebug';

chromeDebug(alt);

class TesterStore {
  constructor() {
    this.bindListeners({
      updateTodo: TesterActions.updateTodo
    });

    this.state = {
      todos: []
    };
  }

  updateTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
}

export default alt.createStore(TesterStore, 'TesterStore');