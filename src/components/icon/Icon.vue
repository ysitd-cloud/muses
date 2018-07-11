<template>
  <i aria-hidden="true" class="material-icons"><slot></slot></i>
</template>

<script>
import Colorable from '../../mixins/color';

export default {
  name: 'Icon',
  mixins: [Colorable],
};
</script>
