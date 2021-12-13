import React, {Component} from 'react';
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import PageHeader from "../../components/utility/pageHeader";
import IntlMessages from "../../components/utility/intlMessages";
import { Row, Col } from "antd";
import basicStyle from "../../settings/basicStyle";
import Box from "../../components/utility/box";
import profile from '../../image/profile.png';
import Form from '../../components/uielements/form';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import Notification from '../../components/notification';


const FormItem = Form.Item;

class Profile extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              Notification(
                  'success',
                  'updated values of profile',
              );
              console.log(values);
          }
      });
    };

    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        return (
            <LayoutWrapper>
                <PageHeader>
                    <IntlMessages id="sidebar.profile"/>
                </PageHeader>
                
                <Row style={rowStyle} gutter={gutter} justify="start">
                    <Col md={3} sm={3} xs={24} style={colStyle}>
                        <Box>
                            <img width="100%" src={profile} alt=""/>
                            <p>asdwoo123@naver.com</p>
                            <p>an sangkyu</p>
                        </Box>
                    </Col>
                    <Col md={12} sm={12} xs={24} style={colStyle}>
                        <Box>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label={
                                        "User Name"
                                    } >
                                    {getFieldDecorator('name', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your name'
                                            }
                                        ]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label={
                                        "Language"
                                    } >
                                    {getFieldDecorator('language', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your language'
                                            }
                                        ]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label={
                                        "Company"
                                    } >
                                    {getFieldDecorator('company')(<Input disabled />)}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label={
                                        "Phone No"
                                    } >
                                    {getFieldDecorator('phone')(<Input />)}
                                </FormItem>
                                <FormItem {...formItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Update
                                    </Button>
                                </FormItem>
                            </Form>
                        </Box>
                    </Col>
                </Row>
            </LayoutWrapper>            
        )
    }
}

export default Form.create()(Profile);
