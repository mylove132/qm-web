<template>
  <div class="content">
    <h1>我是内容</h1>
    <JiraEcharts></JiraEcharts>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JiraEcharts from "./echarts.vue";

@Component({
  name: "Content",
  components: {
    JiraEcharts
  }
})
export default class Content extends Vue {}
</script>

<style scoped>
    .echarts {
        height: 800px;
        background-color: cadetblue;
    }
</style>