<template>
  <a v-if="blank" class="link" :href="href" target="_blank">
    <img :src="'imgs/' + icon + '.png'">
    <span>{{ title }}</span>
  </a>
  <router-link v-if="!blank" class="link" :to="href">
    <img :src="'imgs/' + icon + '.png'">
    <span>{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'HomeLink',
  props: {
    href: String,
    title: String,
    icon: String,
    blank: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  display: inline-block;
  position: relative;
  margin-top: 15px;
  padding: 5px 12px 5px 52px;
  font-size: 24px;
  line-height: 36px;
  color: white;
  background: #14153E;
  text-decoration: none;

  img {
    position: absolute;
    top: 7px;
    left: 10px;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    bottom: 0;
    width: 12px;
    border-top: solid 23px transparent;
    border-bottom: solid 23px transparent;
    content: '';
  }
  &::before {
    right: 100%;
    border-right: solid 12px #14153E;
  }
  &::after {
    left: 100%;
    border-left: solid 12px #14153E;
  }

  &:hover,
  &:focus {
    background-color: #2A3890;

    &::before { border-right-color: #2A3890; }
    &::after { border-left-color: #2A3890; }
  }
}

@media (max-width:639px) {
  .link {
    padding: 5px 12px 5px 36px;
    font-size: 18px;
    line-height: 22px;

    img {
      top: 8px;
      left: 10px;
      width: 16px;
      height: 16px;
    }

    &::before,
    &::after {
      height: 32px;
      width: 9px;
      border-top-width: 16px;
      border-bottom-width: 16px;
    }
    &::before { border-right-width: 9px; }
    &::after { border-left-width: 9px; }
  }
}
</style>
