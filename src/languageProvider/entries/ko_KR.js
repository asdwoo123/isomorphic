import antdKR from 'antd/lib/locale-provider/ko_KR';
import appLocaleData from 'react-intl/locale-data/ko';
import saMessages from '../locales/ko_KR.json';

const saLang = {
  messages: {
    ...saMessages
  },
  antd: antdKR,
  locale: 'ko-KR',
  data: appLocaleData
};
export default saLang;
