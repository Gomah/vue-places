# vue-places

Places component is based on [places.js](https://github.com/algolia/places) for Vue 2.x.

> Turn any <input> into an address autocomplete

[![circle-ci][circle-src]][circle-href]
[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-airbnb/prettier-FF5A5F.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)


---

## Installation

```bash
# yarn
$ yarn add vue-places

# npm
$ npm install vue-places --save
```

## Example

```vue
<template>
  <places
    v-model="form.country.label"
    placeholder="Where are we going ?"
    @change="val => { form.country.data = val }"
    :options="options">
  </places>
</template>

<script>
import Places from 'vue-places';

export default {
  data() {
    return {
      options: {
        appId: <YOUR_PLACES_APP_ID>,
        apiKey: <YOUR_PLACES_API_KEY>,
        countries: ['US'],
      },
      form: {
        country: {
          label: null,
          data: {},
        },
      },
    };
  },
  components: {
    Places,
  },
}
</script>
```

---

[Algolia Places Documentation](https://community.algolia.com/places/documentation.html#options)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/vue-places.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/vue-places
[circle-src]: https://circleci.com/gh/Gomah/vue-places.svg?style=shield
[circle-href]: https://circleci.com/gh/Gomah/vue-places
[npm-downloads-src]: https://img.shields.io/npm/v/vue-places/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/vue-places
[david-dm-src]: https://david-dm.org/gomah/vue-places/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/vue-places
