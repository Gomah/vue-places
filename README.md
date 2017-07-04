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
  <Places
    placeholder="Where are we going ?"
    @change="processChange"
    :options="{
      countries: ['US']
    }">
  </Places>
  <div v-if="currentAdress.name">
    <h2>Current Adress</h2>
    <p>
      Adress: {{ currentAddress.name }} <br />
      City: {{ currentAddress.city }} <br />
      Zipcode: {{ currentAddress.postcode }} <br />
      Country: {{ currentAddress.country }} <br />
      Latitude: {{ currentAddress.latlng.lat }} <br />
      Longitude: {{ currentAddress.latlng.lng }} <br />
    </p>
  </div>
</template>

<script>
import Places from 'vue-places'

export default {
  data() {
    return {
      currentAddress: {}
    };
  },
  methods: {
    processChange (e) {
      this.currentAddress = Object.assign({}, e);
    }
  },
  components: {
    Places
  }
}
</script>
```

---------------

[Algolia Places Documentation](https://community.algolia.com/places/documentation.html#options)
