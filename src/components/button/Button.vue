<template>
  <div is="button" :onClick="onClick" class="button Z-depth-1" :class="themeClass">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
  @import "../../stylus/elevation.styl"
  .button
    display: inline-block
    padding: .5rem 1rem
    color: #fff
    font-family: Roboto, sans-serif
    cursor: pointer
    border: none
    align-items: center
    text-decoration: none
    elevation(1)
    &:focus
      outline: none
</style>

<script>
import BackgroundColor from '../../mixins/bg';

export default {
  name: 'YCloudButton',
  mixins: [BackgroundColor],
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
