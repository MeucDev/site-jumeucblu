<template>
  <div class="page logo bg-light">
    <section class="jumbotron">
      <div class="container py-3">
        <h1 class="jumbotron-heading">Identidade Visual</h1>
        <h3 class="text-muted mb-0">JumeucBlu</h3>
      </div>
    </section>
    <div class="album pt-3 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-12"><h3>Blu</h3></div>
          <AssetImage
            title="Blu azul"
            icon="blu_azul_100.png"
            downloadLink="blu_azul"></AssetImage>
          <AssetImage
            title="Blu branco"
            icon="blu_branco_100.png"
            downloadLink="blu_branco"
            :dark="true"></AssetImage>
          <AssetImage
            title="Blu preto"
            icon="blu_preto_100.png"
            downloadLink="blu_preto"></AssetImage>
        </div>
        <div class="row">
          <div class="col-12 mt-4"><h3>Logo Horizontal</h3></div>
          <AssetImage
            title="Logo azul"
            icon="logo_azul_100.png"
            downloadLink="logo_azul"></AssetImage>
          <AssetImage
            title="Logo branco"
            icon="logo_branco_100.png"
            downloadLink="logo_branco"
            :dark="true"></AssetImage>
          <AssetImage
            title="Logo preto"
            icon="logo_preto_100.png"
            downloadLink="logo_preto"></AssetImage>
        </div>
        <div class="row">
          <div class="col-12 mt-4"><h3>Ícone</h3></div>
          <AssetImage
            title="Ícone azul"
            icon="icone_azul_100.png"
            downloadLink="icone_azul"></AssetImage>
          <AssetImage
            title="Ícone branco"
            icon="icone_branco_100.png"
            downloadLink="icone_branco"
            :dark="true"></AssetImage>
          <AssetImage
            title="Ícone preto"
            icon="icone_preto_100.png"
            downloadLink="icone_preto"></AssetImage>
        </div>
        <div class="row">
          <div class="col-12 mt-4"><h3>Cores</h3></div>
          <AssetColor hex="#14153E"></AssetColor>
          <AssetColor hex="#2A3890"></AssetColor>
          <AssetColor hex="#E6E7E8" :dark="true"></AssetColor>
          <AssetColor hex="#FFFFFF" :dark="true"></AssetColor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssetImage from '@/components/AssetImage.vue'
import AssetColor from '@/components/AssetColor.vue'

export default {
  name: 'LogoView',
  components: {
    AssetImage,
    AssetColor
  }
}
</script>

<style scoped lang="scss">
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
</style>
