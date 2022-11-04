<template>
  <a v-if="href" :href="href" target="_blank" :title="title"><img :src="'imgs/icon-' + icon + '.svg'" :alt="title" /></a>
</template>

<script>
export default {
  name: 'AlbumLink',
  props: {
    href: String,
    title: String,
    icon: String
  }
}
</script>
