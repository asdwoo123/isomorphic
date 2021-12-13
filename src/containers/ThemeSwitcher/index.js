import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from '../../redux/themeSwitcher/actions.js';
import actions from '../../redux/languageSwitcher/actions';
import Switcher from '../../components/themeSwitcher/themeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';
import Themes from './config';
import bucketSVG from '../../image/bucket.svg';
import IntlMessages from '../../components/utility/intlMessages';
import ThemeSwitcherStyle from './themeSwitcher.style';
import firebase from "firebase/app";

const {switchActivation, changeTheme} = Actions;
const { changeLanguage } = actions;

const firestore = firebase.firestore();

class ThemeSwitcher extends Component {
    state = {
        language: null
    };

    componentDidMount() {
        const { changeTheme, changeLanguage } = this.props;
        firestore.collection('theme').doc(localStorage.getItem('user_id'))
            .get().then(doc => {
            if (doc.exists) {
                let { layoutTheme, sidebarTheme, topbarTheme, languageId } = doc.data();

                layoutTheme = layoutTheme || 'themedefault';
                sidebarTheme = sidebarTheme || 'themedefault';
                topbarTheme = topbarTheme || 'themedefault';

                changeTheme('layoutTheme', layoutTheme);
                changeTheme('sidebarTheme', sidebarTheme);
                changeTheme('topbarTheme', topbarTheme);
                changeLanguage(languageId);
            }
        });
    }

    getLanguageId = (language) => this.setState({ language });

    render() {
        const {
            isActivated,
            //changeThemes,
            topbarTheme,
            sidebarTheme,
            layoutTheme,
            switchActivation,
            changeTheme
        } = this.props;

        const styleButton = {background: sidebarTheme.buttonColor};

        return (
            <ThemeSwitcherStyle
                className={isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher'}
            >
                <div className="componentTitleWrapper" style={styleButton}>
                    <h3 className="componentTitle">
                        <IntlMessages id="themeSwitcher.settings"/>
                    </h3>
                </div>

                <div className="SwitcherBlockWrapper">
                    {/*<Switcher
            config={Themes.changeThemes}
            changeTheme={changeTheme}
            selectedId={changeThemes.themeName}
          />*/}
                    <Switcher
                        config={Themes.sidebarTheme}
                        changeTheme={changeTheme}
                        selectedId={sidebarTheme.themeName}
                    />

                    <Switcher
                        config={Themes.topbarTheme}
                        changeTheme={changeTheme}
                        selectedId={topbarTheme.themeName}
                    />

                    <Switcher
                        config={Themes.layoutTheme}
                        changeTheme={changeTheme}
                        selectedId={layoutTheme.themeName}
                    />
                    <LanguageSwitcher getLanguageId={this.getLanguageId}/>
                </div>

                <div className="purchaseBtnWrapper">
          <span
              className="purchaseBtn"
              style={styleButton}
              onClick={() => {
                  firestore.collection('theme')
                      .doc(localStorage.getItem('user_id'))
                      .set({
                          sidebarTheme: sidebarTheme.themeName,
                          topbarTheme: topbarTheme.themeName,
                          layoutTheme: layoutTheme.themeName,
                          languageId: this.state.language.languageId
                      });
                  switchActivation();
              }
              }
          >
            <IntlMessages id="themeSwitcher.save"/>
          </span>
                </div>

                <button
                    type="primary"
                    className="switcherToggleBtn"
                    style={{...styleButton, display: 'none'}}
                    onClick={() => {
                        switchActivation();
                    }}
                >
                    <img src={process.env.PUBLIC_URL + bucketSVG} alt="bucket"/>
                </button>
            </ThemeSwitcherStyle>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.ThemeSwitcher,
        LanguageSwitcher: state.LanguageSwitcher
    };
}

export default connect(mapStateToProps, {
    switchActivation,
    changeTheme,
    changeLanguage
})(ThemeSwitcher);
