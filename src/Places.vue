<template>
  <input type="search" v-bind:value="value" @input="updateValue($event.target.value)" />
</template>
<script>
import places from 'places.js';

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      placesAutocomplete: null,
    };
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },

  mounted() {
    this.options.container = this.options.container || this.$el;
    this.placesAutocomplete = places(this.options);

    this.placesAutocomplete.on('change', (e) => {
      this.$emit('change', e.suggestion);
      this.updateValue(e.suggestion.value);
    });

    this.placesAutocomplete.on('clear', () => {
      this.$emit('change', {});
      this.updateValue(null);
    });
  },

  beforeDestroy() {
    this.placesAutocomplete.destroy();
  },
};
</script>
