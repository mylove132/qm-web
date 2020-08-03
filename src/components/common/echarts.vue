<template>
  <div class="echarts">
    <div id="jira" ref="jira"></div>
    <div id="online" ref="online"></div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component
export default class JiraEcharts extends Vue {
  private $echarts: any;
  private options: object = {
    //里面写要显示的echarts图标
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }
    ]
  };
  private mounted() {
      console.log(this.options);
      //const ele = this.$refs.jira as HTMLDivElement;
      const ele = document.getElementById('jira');
      console.log(ele);
      console.log(this.$echarts);
      const charts: any = this.$echarts.init(ele);
      console.log(charts)
      charts.setOption(this.options);
  }
}
</script>

<style scoped>
</style>