# vue-places

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
  <places placeholder="Where are we going ?" :options="{ countries: 'US' }"></places>
</template>

<script>
import Places from 'vue-places'

export default {
  components: {
    Places
  }
}
</script>
```

---------------

[Algolia Places Documentation](https://community.algolia.com/places/documentation.html#options)
