<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './views/common/header/index.vue';
import Content from './views/common/content/index.vue';
import Footer from './views/common/footer/index.vue';

@Component({
  components: {
    Header,
    Content,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
