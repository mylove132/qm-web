<template>
    <h1>我是头部</h1>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component({
    name: 'Header',  
})
export default class Header extends Vue {
  
}
</script>

<style scoped>
</style>