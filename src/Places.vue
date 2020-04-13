<template>
  <input
    type="search"
    :value="value"
    @input="updateValue($event.target.value)"
  />
</template>
<script>
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

  watch: {
    options: {
      deep: true,
      handler(newOptions) {
        this.placesAutocomplete.configure(newOptions);
      },
    },
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const places = require('places.js');

      this.options.container = this.options.container || this.$el;
      this.placesAutocomplete = places(this.options);

      this.placesAutocomplete.on('change', (e) => {
        this.$emit('change', e.suggestion);
        this.updateValue(e.suggestion.value);
      });

      this.placesAutocomplete.on('clear', () => {
        this.$emit('change', {});
        this.$emit('clear');
        this.updateValue(null);
      });
    },

    updateValue(value) {
      this.$emit('input', value);
    },
  },

  beforeDestroy() {
    if (this.placesAutocomplete) {
      this.placesAutocomplete.destroy();
    }
  },
};
</script>
