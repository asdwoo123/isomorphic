import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './forgotPassword.style';
import firebase from 'firebase/app';
import notification from "../../components/notification";

const auth = firebase.auth();

export default class extends Component {
  state = {
    email: ''
  };

  handleOnChange = (e) => {
    const value = e.target.value;
    this.setState({
      email: value
    });
  };

  sendToEmail = async () => {
    try {
      const email = this.state.email;
      if (email !== '') {
        await auth.sendPasswordResetEmail(email);
        this.props.history.push('/');
        return
      }
      notification('error', '이메일을 입력해 주세요');
    } catch (e) {

    }
  };

  render() {
    return (
      <ForgotPasswordStyleWrapper className="isoForgotPassPage">
        <div className="isoFormContentWrapper">
          <div className="isoFormContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.forgetPassTitle" />
              </Link>
            </div>

            <div className="isoFormHeadText">
              <h3>
                <IntlMessages id="page.forgetPassSubTitle" />
              </h3>
              <p>
                <IntlMessages id="page.forgetPassDescription" />
              </p>
            </div>

            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email"
                       value={this.state.email} onChange={this.handleOnChange} />
              </div>

              <div className="isoInputWrapper">
                <Button type="primary" onClick={this.sendToEmail}>
                  <IntlMessages id="page.sendRequest" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
    );
  }
}
