import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import firebase from 'firebase/app';
import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from './signup.style';
import notification from "../../components/notification";

const {login} = authAction;
const {clearMenu} = appActions;

class SignUp extends Component {
    state = {
        redirectToReferrer: false,
        email: '',
        password: '',
        confirm: '',
        terms: false
    };

    componentWillReceiveProps(nextProps) {
        if (
            this.props.isLoggedIn !== nextProps.isLoggedIn &&
            nextProps.isLoggedIn === true
        ) {
            this.setState({redirectToReferrer: true});
        }
    }

    handleLogin = (token = false) => {
        const {login, clearMenu} = this.props;
        console.log(token, 'handlelogin');
        if (token) {
            login(token);
        } else {
            login();
        }
        clearMenu();
        this.props.history.push('/dashboard');
    };

    handleSignUp = () => {
        const {confirm, email, password, terms, name} = this.state;
        const emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        const passwordReg = /^\d+$/;
        if (!terms) {
          notification('error', 'Please accept the terms.');
        } else if (emailReg.test(email) === false) {
          notification('error', 'It does not fit the email form.');
        } else if (passwordReg.test(password) === true && password.length >= 6) {
          notification('error', 'The password must contain at least 6 digits of letters and numbers.');
        } else if (confirm !== password) {
          notification('error', 'Passwords do not match.');
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    firebase.firestore().collection('users').doc(user.user.uid)
                        .set({
                            email
                        });
                    notification('success', 'Sign up is complete.');
                    this.setState({
                        email: '',
                        password: '',
                        confirm: '',
                        terms: false
                    });
                }).catch((e) => {

            });
        }
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <SignUpStyleWrapper className="isoSignUpPage">
                <div className="isoSignUpContentWrapper">
                    <div className="isoSignUpContent">
                        <div className="isoLogoWrapper">
                            <Link to="/dashboard">
                                <IntlMessages id="page.signUpTitle"/>
                            </Link>
                        </div>

                        <div className="isoSignUpForm">

                            <div className="isoInputWrapper">
                                <Input name="email" size="large" onChange={this.handleOnChange} placeholder="Email"/>
                            </div>

                            <div className="isoInputWrapper">
                                <Input name="password" size="large" onChange={this.handleOnChange} type="password"
                                       placeholder="Password"/>
                            </div>

                            <div className="isoInputWrapper">
                                <Input
                                    size="large"
                                    type="password"
                                    onChange={(e) => {
                                        this.setState({
                                            confirm: e.target.value
                                        });
                                    }}
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="isoInputWrapper" style={{marginBottom: '50px'}}>
                                <Checkbox name="terms" onChange={(e) => {
                                    this.setState({
                                        terms: e.target.checked
                                    })
                                }}>
                                    <IntlMessages id="page.signUpTermsConditions"/>
                                </Checkbox>
                            </div>

                            <div className="isoInputWrapper">
                                <Button type="primary" onClick={this.handleSignUp}>
                                    <IntlMessages id="page.signUpButton"/>
                                </Button>
                            </div>
                            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                                <Link to="/signin">
                                    <IntlMessages id="page.signUpAlreadyAccount"/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </SignUpStyleWrapper>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.Auth.idToken !== null ? true : false,
    }),
    {login, clearMenu}
)(SignUp);
