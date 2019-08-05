import { connect } from 'react-redux';

import { SignUp } from 'Pages/SignUp';
import { signUpStart } from 'redux/actions/authActions';

const mapStateToProps = ({ auth: { signUpProcess } }: any) => ({ signUpProcess });

const mapDispatchToProps = {
  signUpStart,
};

export const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
