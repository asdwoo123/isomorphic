import React, { Component } from 'react';
import Async from '../../helpers/asyncComponent';
import Button from '../uielements/button';
import Input from '../uielements/input';
import ComposeAutoComplete from './composeAutoComplete';
import notification from '../notification';
import IntlMessages from '../utility/intlMessages';
import ComposeForm from './composeMail.style';
import Select, { SelectOption } from '../../components/uielements/select';
const Option = SelectOption;


const Editor = props => (
  <Async
    load={import(/* webpackChunkName: "compose-mAIL--editor" */ '../uielements/editor')}
    componentProps={props}
  />
);

function uploadCallback(file) {
  return new Promise((resolve, reject) => {

    /*const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
    const data = new FormData();
    data.append('image', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });*/
  });
}
export default class ComposeMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      loading: false,
      iconLoading: false
    };
  }
  render() {
    const onEditorStateChange = editorState => {
      this.setState({ editorState });
    };
    const ComposeAutoCompleteTO = {
      allMails: this.props.allMails,
      updateData: () => {},
      placeholder: 'Branch',
      autofocus: true
    };
    const ComposeAutoCompleteCC = {
      allMails: this.props.allMails,
      updateData: () => {},
      placeholder: 'CC'
    };
    const editorOption = {
      style: { width: '90%', height: '70%' },
      editorState: this.state.editorState,
      toolbarClassName: 'home-toolbar',
      wrapperClassName: 'home-wrapper',
      editorClassName: 'home-editor',
      onEditorStateChange: onEditorStateChange,
      uploadCallback: uploadCallback,
      toolbar: { image: { uploadCallback: uploadCallback } }
    };

    return (
      <ComposeForm className="isoComposeMailWrapper">
        {/*<ComposeAutoComplete {...ComposeAutoCompleteTO} />*/}
        {/*<ComposeAutoComplete {...ComposeAutoCompleteCC} />*/}
        <Select
            plcaceholder="Branch"
            onChange={this.handleChange}
            style={{ width: '100%', marginBottom: 10 }}
        >
          <Option value="본사">본사</Option>
          <Option value="서울">서울</Option>
          <Option value="대전">대전</Option>
          <Option value="대구">대구</Option>
        </Select>
        <Select
            mode="tags"
            style={{ width: '100%', marginBottom: 10 }}
            placeholder="Tags"
            onChange={this.handleChange} >
          <Option key="업무1">업무1</Option>
          <Option key="업무2">업무2</Option>
          <Option key="업무3">업무3</Option>
        </Select>
        <Input placeholder="Subject" className="isoInputBox" />
        <Editor {...editorOption} />
        <div className="isoComposeMailBtnWrapper">
          {this.props.mobileView || this.props.tabView ? (
            <Button
              type="primary"
              onClick={() => {
                this.props.changeComposeMail(false);
              }}
              className="isoCancelMailBtn"
            >
              <IntlMessages id="email.cancel" />
            </Button>
          ) : (
            ''
          )}

          <Button
            type="primary"
            onClick={e => notification('success', `Mail has been sent`, '')}
            className="isoSendMailBtn"
          >
            <IntlMessages id="email.send" />
          </Button>
        </div>
      </ComposeForm>
    );
  }
}
