<template>
  <div class="asset col-md-4">
    <div class="card mb-4">
      <div class="d-flex justify-content-center align-items-center py-3" :class="dark ? 'bg-dark' : 'bg-white'">
        <img :src="'imgs/' + icon" :alt="title">
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title my-auto">{{ title }}</h5>
          <div class="btn-group">
            <a :href="'download/' + downloadLink + '.svg'" target="_blank" class="btn btn-sm btn-outline-secondary">SVG</a>
            <a :href="'download/' + downloadLink + '.png'" target="_blank" class="btn btn-sm btn-outline-secondary">PNG</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetImage',
  props: {
    title: String,
    downloadLink: String,
    icon: String,
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
