# vue-places

[![Greenkeeper badge](https://badges.greenkeeper.io/Gomah/vue-places.svg)](https://greenkeeper.io/)

Places component is based on [places.js](https://github.com/algolia/places) for Vue 2.x.

---------------

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
    :options="{ countries: 'US' }">
  </places>
</template>

<script>
import Places from 'vue-places'

export default {
  data() {
    return {
      form: {
        country: {
          label: null,
          data: {},
        },
      },
    };
  },
  components: {
    Places
  }
}
</script>
```

---------------

[Algolia Places Documentation](https://community.algolia.com/places/documentation.html#options)
