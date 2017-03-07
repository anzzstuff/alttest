import alt from './alt';

class TesterActions {
  updateTodo(id, text) {
    return { id, text }
  }
}

export default alt.createActions(TesterActions);