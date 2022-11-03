<template>
  <div class="col-md-3">
    <div class="card mb-4">
      <div :style="{ backgroundColor: hex }"><h5 class="p-3 mb-0" :class="[ dark ? 'text-dark' : 'text-white']">{{hex}}</h5></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetColor',
  props: {
    hex: String,
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
