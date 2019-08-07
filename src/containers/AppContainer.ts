import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { App } from 'App';
import { clearAlerts } from 'redux/actions/authActions';

const mapDispatchToProps = {
  clearAlerts,
};

export const AppContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(App) as any);
