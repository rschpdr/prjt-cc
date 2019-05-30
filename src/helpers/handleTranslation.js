import strings from '../strings';

export default language => {
  // Check if user language is in the supported languages array. If it's not, fallback to english.
  if (strings.supportedLangs.indexOf(language) < 0) {
    return 'en';
  }
  return language;
};
