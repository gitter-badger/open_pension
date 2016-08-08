
// app/translate/translation.ts

import { OpaqueToken, provide } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_HE_NAME, LANG_HE_TRANS } from './lang-he';

// translation token
// opaque token : is an object with no application interfaces.
// (special kind of provider lookup key for use in dependency injection. )
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_HE_NAME]: LANG_HE_TRANS
};

// providers
export const TRANSLATION_PROVIDERS = [
    provide(TRANSLATIONS, { useValue: dictionary }),
];
