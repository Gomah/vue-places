import { shallowMount } from '@vue/test-utils';
import Places from '../src/Places.vue';

describe('Places', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(Places);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = shallowMount(Places);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
