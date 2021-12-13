import React, {Component} from "react";
import {connect} from "react-redux";
import {Layout} from "antd";
import appActions from "../../redux/app/actions";
import TopbarNotification from "./topbarNotification";
import TopbarMessage from "./topbarMessage";
import TopbarSearch from "./topbarSearch";
import TopbarUser from "./topbarUser";
import TopbarAddtoCart from "./topbarAddtoCart";
import TopbarWrapper from "./topbar.style";
import screenfull from 'screenfull';
import WindowResizeListener from "react-window-size-listener";
import Actions from '../../redux/themeSwitcher/actions';

const { switchActivation } = Actions;

const {Header} = Layout;
const {toggleCollapsed} = appActions;

class Topbar extends Component {
    state = {
        windowWidth: 1200
    };

    render() {
        const {toggleCollapsed, url, customizedTheme, locale, switchActivation} = this.props;
        const collapsed = this.props.collapsed && !this.props.openDrawer;
        const styling = {
            background: customizedTheme.backgroundColor,
            position: "fixed",
            width: "100%",
            height: 70
        };
        return (
            <TopbarWrapper>
                <WindowResizeListener
                    onResize={windowSize =>
                        this.setState({
                            windowWidth: windowSize.windowWidth
                        })
                    }
                />
                <Header
                    style={styling}
                    className={
                        collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
                    }
                >
                    <div className="isoLeft">
                    {
                        this.state.windowWidth <= 767 ?

                                <button
                                    className={
                                        collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
                                    }
                                    style={{color: customizedTheme.textColor}}
                                    onClick={toggleCollapsed}
                                />
                            : null
                    }
                    </div>

                    <ul className="isoRight">
                        {/*<li className="isoSearch">
              <TopbarSearch locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "notification" })}
              className="isoNotify"
            >
              <TopbarNotification locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "message" })}
              className="isoMsg"
            >
              <TopbarMessage locale={locale} />
            </li>*/}
                        {/*            <li
              onClick={() => this.setState({ selectedItem: "addToCart" })}
              className="isoCart"
            >
              <TopbarAddtoCart url={url} locale={locale} />
            </li>*/}

                        <li
                            onClick={() => this.setState({selectedItem: "user"})}
                            className="isoUser"
                        >
                            {
                                (this.state.windowWidth > 767 || collapsed) ? <TopbarUser locale={locale} color={customizedTheme.textColor}/> : null
                            }
                        </li>
                        <li onClick={() => switchActivation()}>
                            <div className="isoIconWrapper">
                                <i
                                    style={{color: customizedTheme.textColor}}
                                    className="ion-android-settings"
                                />
                            </div>
                        </li>
                        {
                            this.state.windowWidth > 767 ?

                                <li onClick={() => screenfull.toggle()}>
                                    <div className="isoIconWrapper">
                                        <i
                                            style={{color: customizedTheme.textColor}}
                                            className="ion-android-expand"
                                        />
                                    </div>
                                </li> : null
                        }
                    </ul>
                </Header>
            </TopbarWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.App,
        locale: state.LanguageSwitcher.language.locale,
        customizedTheme: state.ThemeSwitcher.topbarTheme
    }),
    {toggleCollapsed, switchActivation}
)(Topbar);
