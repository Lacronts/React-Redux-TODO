import { connect } from 'react-redux';

import { Todo } from 'Pages/Todo';
import {
  addItemStart,
  fetchTodosStart,
  deleteTodoItemStart,
} from 'redux/actions/todosActions';
import { clearAlerts } from 'redux/actions/authActions';

const mapStateToProps = ({ todos }: any) => ({ todos });

const mapDispatchToProps = {
  addItemStart,
  clearAlerts,
  fetchTodosStart,
  deleteTodoItemStart,
};

export const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
