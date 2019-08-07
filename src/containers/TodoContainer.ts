import { connect } from 'react-redux';

import { Todo } from 'Pages/Todo';
import { addItemStart } from 'redux/actions/todosActions';

const mapStateToProps = ({ todos }: any) => ({ todos });

const mapDispatchToProps = {
  addItemStart,
};

export const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
