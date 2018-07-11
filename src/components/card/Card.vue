<template>
  <div class="card" :class="depthClass(8)">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
  @import "../../stylus/elevation.styl"
  .card
    display: block
    min-width: 0
    padding: 15px 10px
</style>

<script>
import Depth from '../../mixins/depth';

export default {
  name: 'YCloudCard',
  mixins: [Depth],
};
</script>
