import handleTranslation from './handleTranslation';

it("returns a two-letter string representing the user's language setting when it's in the supported languages array", () => {
  expect(handleTranslation('pt')).toBe('pt');
});

it(`returns 'en' when the user\'s language is not in the supported languages array`, () => {
  expect(handleTranslation('es')).toBe('en');
});

it(`returns 'en' when the function argument is not a two-letter string`, () => {
  expect(handleTranslation('fr-FR')).toBe('en');
});

it(`returns 'en' when the function argument is not a string at all`, () => {
  expect(handleTranslation([null, undefined])).toBe('en');
});
