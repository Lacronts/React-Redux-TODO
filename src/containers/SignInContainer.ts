import { connect } from 'react-redux';

import { SignIn } from 'Pages/SignIn';
import { signInStart } from 'redux/actions/authActions';

const mapStateToProps = ({ signInProcess }: any) => ({ signInProcess });

const mapDispatchToProps = {
  signInStart,
};

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
