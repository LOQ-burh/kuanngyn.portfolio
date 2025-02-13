import { getRequestConfig } from 'next-intl/server';
import { Locale, routing } from './routes';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./en.json')
        : import(`./${locale}.json`))
    ).default
  };
});