<template>
  <div class="page home">
    <div class="content">
      <img src="../assets/logo.png" />
      <div class="links">
        <HomeLink
          href="https://www.instagram.com/jumeucblu/"
          icon="instagram"
          title="Instagram"
          :blank="true"></HomeLink>
        <HomeLink
          href="/album"
          icon="album"
          title="Álbum"></HomeLink>
        <HomeLink
          href="/logo"
          icon="identidade-visual"
          title="Identidade Visual"></HomeLink>
        <HomeLink
          href="/slides"
          icon="slides"
          title="Slides"
          :blank="true"></HomeLink>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLink from '@/components/HomeLink.vue'

export default {
  name: 'HomeView',
  components: {
    HomeLink
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-content: center;
  background: center repeat url('../assets/background.jpg');

  .content {
    max-width: 720px;
    margin: auto;
    padding: 10px;
    text-align: center;

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: space-between;
      margin-top: 20px;
    }
  }
}
</style>
