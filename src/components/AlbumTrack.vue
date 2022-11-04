<template>
  <div class="track">
    <div class="info">
      <h3>{{title}}</h3>
      <h4>{{writer}}</h4>
    </div>
    <div class="track-links">
      <AlbumLink :href="spotifyHref" title="Spotify" icon="spotify"></AlbumLink>
      <AlbumLink :href="deezerHref" title="Deezer" icon="deezer"></AlbumLink>
      <AlbumLink :href="youtubeHref" title="YouTube" icon="youtube"></AlbumLink>
      <AlbumLink :href="appleMusicHref" title="Apple Music" icon="apple-music"></AlbumLink>
      <AlbumLink :href="pdf" title="PDF" icon="pdf"></AlbumLink>
    </div>
  </div>
</template>

<script>
import AlbumLink from '@/components/AlbumLink.vue'

export default {
  name: 'AlbumTrack',
  props: {
    title: String,
    writer: String,
    spotifyHref: String,
    deezerHref: String,
    youtubeHref: String,
    appleMusicHref: String,
    pdf: String
  },
  components: {
    AlbumLink
  }
}
</script>

<style lang="scss">
.track {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.4em;
  margin-top: 1em;
  border-radius: .5em;
  background: rgba(20,20,20,.4);
  font-size: .8em;

  .info {
    h3 {
      font-size: 1.2em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .1em;
    }

    h4 {
      font-size: 1em;
      font-weight: 400;
    }
  }

  .track-links {
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

@media screen and (max-width:499px) {
  .track {
    flex-direction: column;
    text-align: center;
    padding: 1em 1.4em .5em;

    .track-links {
      margin-top: .5em;
    }
  }
}
</style>
