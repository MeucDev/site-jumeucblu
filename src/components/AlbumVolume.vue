<template>
  <div class="volume">
    <div class="title">
      <h2>{{title}}</h2>
      <div class="line"></div>
      <div class="album-links">
        <AlbumLink :href="spotifyHref" title="Spotify" icon="spotify"></AlbumLink>
        <AlbumLink :href="deezerHref" title="Deezer" icon="deezer"></AlbumLink>
        <AlbumLink :href="youtubeHref" title="YouTube" icon="youtube"></AlbumLink>
        <AlbumLink :href="appleMusicHref" title="Apple Music" icon="apple-music"></AlbumLink>
        <AlbumLink :href="pdf" title="PDF" icon="pdf"></AlbumLink>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import AlbumLink from '@/components/AlbumLink.vue'

export default {
  name: 'AlbumVolume',
  props: {
    title: String,
    spotifyHref: String,
    deezerHref: String,
    youtubeHref: String,
    appleMusicHref: String
  },
  components: {
    AlbumLink
  }
}
</script>

<style lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;

  h2 {
    flex-grow: 0;
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .4em;
    white-space: nowrap;
  }

  .line {
    flex-grow: 1;
    height: 1px;
    margin: auto 1em;
    background-color: rgba(255,255,255,.5);
  }

  .album-links {
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: block;
      padding: .5em;

      & + a {
        margin-left: .5em;
      }

      &:hover,
      &:focus {
        opacity: .7;
      }

      img {
        display: block;
        width: 2em;
      }
    }
  }
}
</style>
