<template>
  <div class="home">
      <Header/>
      <Content/>
      <Footer/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";
import Header from '@/components/common/header.vue';
import Content from '@/components/common/content.vue';
import Footer from '@/components/common/footer.vue';

@Component({
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  }
})
export default class Home extends Vue {
  
}
</script>

<style scoped>
</style>