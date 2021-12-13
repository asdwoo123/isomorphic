import { language } from '../../settings';

import englishLang from '../../image/flag/uk.png';
import chineseLang from '../../image/flag/cn.png';
import koreanLang from '../../image/flag/ko.png';
import spanishLang from '../../image/flag/spain.png';
import frenchLang from '../../image/flag/france.svg';
import italianLang from '../../image/flag/italy.svg';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'korean',
      locale: 'ko',
      text: 'Korean',
      icon: koreanLang,
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
      icon: chineseLang,
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: spanishLang,
    },
    /*{
      languageId: 'french',
      locale: 'fr',
      text: 'French',
      icon: frenchLang,
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
      icon: italianLang,
    },*/
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
