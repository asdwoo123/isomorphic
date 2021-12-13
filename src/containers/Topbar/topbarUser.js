import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from '../../components/uielements/popover';
import IntlMessages from '../../components/utility/intlMessages';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a className="isoDropdownLink" href="#">
          <IntlMessages id="sidebar.profile" />
        </a>
        <a className="isoDropdownLink" onClick={this.props.logout} href="#">
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
        <a className="isoDropdownLink" onClick={this.props.logout} style={{ color: this.props.color }} href="#">
          <IntlMessages id="topbar.logout" />
        </a>
    );
  }
}
export default connect(
  null,
  { logout }
)(TopbarUser);
