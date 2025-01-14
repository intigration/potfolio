# locale.build.d

This directory contains intermediary source translation files used to generate the main `/locale/en.json` locale file.
See below to generate those files.


## nuxt-i18n introduction

nuxt-i18n is kind of a fancy lookup table. When you use `{{ $t("hello!") }}`  it'll look up for the key `"hello!"` in your locale file and display the corresponding value.
If the key doesn't exist, it fall back to the english file (`en.json`), and if the key doesn't exist there neither, it'll just display the key name `"hello!"` instead.

Once you start using the `$t(key)` format, nuxt will begin to log any keys that are not found in the locale file. Something like:

```
[intlify] Not found 'hello!' key in 'en' locale messages.
```

At that point, you'll need to add those missing key in  `en.json` file. Since the `en` locale is our base locale, the key/value pair will be identical:

```json
{
  "hello!": "hello!"
}
```

You don't need to add every strings used with `$t(key)` in the locale file. Only the ones you want to see translated.

Others locales will then be generated by Weblate, using the `en.json` as starting point for any new translation.

## Adding new translation strings

Now adding strings to `en.json` can be quite tedious especially when we ends up with a lot of text to translate, from various sources (vue files, CMS or javascript).
That's why we split up this file in `/locales.build.d/`. Each file here match either a vue file, or CMS content. The `merge.py` script is used to combine all json files into one final `en.json` used by Nuxt (and Weblate).


`base.json` contains all the hard coded strings found in vue files. It is created using `vue-i18n-extract` with the following command:

```
npx vue-i18n-extract --vueFiles './{pages,components}/**/*.vue' --languageFiles ./locales.build.d/base.json --add --remove
```

`flock.json` contains all the strings from the flock page in the CMS. It's generated with `genLocale.py` script that basically takes all strings from the yaml, and flatten the result in the json. 

```
./locales.build.d/genLocale.py content/editions/workstation/download.yml -o locales.build.d/workstation_download.json
```

You still need to manually clean up the resulting json file to remove all the strings that you don't want to translate. The script do some basic filtering to remove links and filepath, but you might want to remove brands name or placeholder texts as well.

You can use `git diff` and `git add -p some_file.json` to pick the strings you want and ignore everything else.

You can create any additional json file here for strings that are neither in CMS or in Vue files. For instance, there is a `nav.json` that contains strings from the navigation menu defined in `/config/navigation.js`. This one was created manually.

Once done, don't forget to run the `merge.py` script to combine all strings in the `en.json` file.
