import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import appAction from '../../redux/app/actions';
import Auth0 from '../../helpers/auth0';
import Firebase from '../../helpers/firebase';
import FirebaseLogin from '../../components/firebase';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import notification from "../../components/notification";
import firebase from "firebase/app";


const { login } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    email: '',
    password: '',
    remember: false
  };

  componentDidMount() {
    const { login, history } = this.props;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) history.push('/dashboard');
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = (token = false) => {
    const { login } = this.props;
    const { email, password, remember } = this.state;
    if (email !== '' && password !== '') {
      Firebase.login({ email, password, remember })
          .then((doc) => {
            if (doc.user) {
              if (!localStorage.getItem('user_id')) {
                localStorage.setItem('user_id', doc.user.uid);
              }
              login();
              notification('success', 'Sign-in succeeded');
              this.props.history.push('/dashboard');
            } else {
              notification('error', doc.message);
            }
          }).catch((e) => {
            notification('error', 'Sign-in failed');
      });
    }
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input value={this.state.email} name="email" onChange={this.handleOnChange} size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.password} name="password" onChange={this.handleOnChange} size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox name="remember" onChange={(e) => {
                  this.setState({
                    remember: e.target.checked
                  })
                }}>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Link to="/signup">
                  <IntlMessages id="page.signInCreateAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false,
  }),
  { login, clearMenu }
)(SignIn);
