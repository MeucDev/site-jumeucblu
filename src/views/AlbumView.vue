<template>
  <div class="page album">
    <div class="bubbles"></div>
    <div class="content">
      <div class="cover">
        <img alt="Capa Álbum Além de Mim" src="imgs/alem-de-mim.jpg" />
        <h1>Além de Mim</h1>
      </div>
      <AlbumVolume
        title="Playlist"
        spotifyHref="https://open.spotify.com/album/0vd4KFioHaOnFb34WRrNZQ?si=kokLKU1iRI6EJDFcvdKKxw"
        deezerHref="https://deezer.page.link/tepjmPNfaW534h2t9"
        youtubeHref="https://youtube.com/playlist?list=PLpBwWxqDK_6IYKGcgbeQVsccrB7vrxgxa"
        appleMusicHref="https://music.apple.com/br/album/al%C3%A9m-de-mim-single/1599072393">
        <AlbumTrack
          title="Mais que Obedecer"
          writer="Ingmar S. Aguiar"
          spotifyHref="https://open.spotify.com/track/7dGxutBJqXtBhwDblJfw9P?si=5750cfc3a954498e"
          deezerHref="https://deezer.page.link/hc711KiCJnULRDXu9"
          youtubeHref="https://youtu.be/5UevV0Ufz94"
          appleMusicHref="https://music.apple.com/br/album/mais-que-obedecer/1599072393?i=1599072395"></AlbumTrack>
        <AlbumTrack
          title="Estar Preparado"
          writer="Cecília N. R. Rengel"
          spotifyHref="https://open.spotify.com/track/0P3qLxA4ewfkMBY5B1yzmU?si=29d6831fd9c74cfa"
          deezerHref="https://deezer.page.link/RS89QoyspQXrkH5F7"
          youtubeHref="https://youtu.be/EjR7DBEGEMA"
          appleMusicHref="https://music.apple.com/br/album/estar-preparado/1599072393?i=1599072667"></AlbumTrack>
        <AlbumTrack
          title="Justificados Pela Fé"
          writer="Dietmar Jung"
          spotifyHref="https://open.spotify.com/track/7LN8f2HnhJzLw69GwFmNx7?si=04b1a595a18941a3"
          deezerHref="https://deezer.page.link/1ZhGNTrKnLtAbxgD6"
          youtubeHref="https://youtu.be/UOY67TKmFNo"
          appleMusicHref="https://music.apple.com/br/album/justificados-pela-f%C3%A9/1599072393?i=1599072670"></AlbumTrack>
      </AlbumVolume>
      <img class="logo" alt="JumeucBlu" src="../assets/logo_branco.svg" />
    </div>
  </div>
</template>

<script>
import AlbumTrack from '@/components/AlbumTrack.vue'
import AlbumVolume from '@/components/AlbumVolume.vue'

export default {
  name: 'AlbumView',
  components: {
    AlbumTrack,
    AlbumVolume
  }
}
</script>

<style scoped lang="scss">
.album {
  background: rgb(27,40,100);
  background: linear-gradient(0deg, rgba(27,40,100,1) 0%, rgba(176,134,197,1) 100%);
  color: white;
  font-size: 16px;
}

.bubbles {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: top center repeat-x url('../assets/bubbles.png');
  z-index: 5;
}

.content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 3em 1em;
  z-index: 10;

  .cover {
    display: flex;
    align-items: flex-end;
    padding: 2em 1em;
    margin-bottom: 2em;

    img {
      max-width: 30%;
      margin-right: 2em;
      box-shadow: 2px 2px 8px -2px rgba(0,0,0,0.6);
    }

    h1 {
      font-size: 2em;
      line-height: 1em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .4em;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }
  }

  img.logo {
    display: block;
    margin: 4em auto 2em;
    max-width: 40%;
  }
}

@media screen and (max-width:699px) {
  .content {
    .cover {
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
        max-width: 320px;
        margin: 0 2em 3em;
      }

      h1 {
        text-align: center;
        line-height: 1.4em;
      }
    }
  }
}

@media screen and (max-width:499px) {
  .content {
    .cover {
      h1 {
        font-size: 1.4em;
      }
    }

    img.logo {
      max-width: 60%;
    }
  }
}
</style>
