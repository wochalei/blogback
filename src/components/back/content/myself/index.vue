<template>
  <div>
    <div class="myself" v-if="load">
      <user :name="name" :img="img" />
      <my-title :icon="'iconfont icon-zhexiantu'" :title="'文章统计图'" />
      <!-- <v-md-preview :text="text" ref="preview"></v-md-preview> -->
      <div class="charts">
        <div class="chartsI">
          <chart :option="optionA" :width="width" :height="height" />
        </div>
        <div class="chartsI">
          <chart :option="optionB" :width="width" :height="height" />
        </div>
        <div class="chartsI">
          <chart :option="optionC" :width="width" :height="height" />
        </div>
      </div>
      <my-title :icon="'iconfont icon-gongjuxiang'" :title="'个人技能'" />
      <div class="skills">
        <skill v-for="(item, index) in skills" :key="index" :item="item" />
      </div>
      <my-title :icon="'iconfont icon-guidang'" :title="'个人项目'" />
      <project/>
      <my-title :icon="'iconfont icon-dengpao'" :title="'个人爱好'" />
      <hobby/>
      <my-title :icon="'iconfont icon-xiangce'" :title="'个人相册'" />
      <album />
    </div>
    <div class="loadbox" v-else><load /></div>
  </div>
</template>
<script>
import load from ".././../../common/loading/loaddata";
import album from "./album/index.vue";
import project from "./project/index.vue";
import hobby from './hobby'
import { user_infor, blog } from "../../../../http/api";
import chart from "../../../charts";
import user from "./user";
import skill from "./skill/index.vue";
import myTitle from "./tittle/index.vue";
import { optionA, optionB, optionC } from "../../../charts/option";
import { timeToYm } from "../../../../utils.js/tools";
export default {
  data() {
    return {
      text: "",
      name: "",
      img: "",
      optionA,
      optionB,
      optionC,
      width: "100%",
      height: "300px",
      skills: [
        { skill: "JavaScript", precentage: "80%" },
        { skill: "CSS", precentage: "80%" },
        { skill: "Vue", precentage: "80%" },
        { skill: "Sass", precentage: "80%" },
        { skill: "Git", precentage: "80%" },
        { skill: "React", precentage: "30%" },
        { skill: "Echart", precentage: "40%" },
        { skill: "Web安全", precentage: "30%" },
        { skill: "小程序", precentage: "40%" },
      ],
      load: false,
    };
  },
  methods: {
    getOptionA() {
      let map = {},
        res = [];
      this.chartData.forEach((item) => {
        if (!map[item.type]) map[item.type] = 0;
        map[item.type]++;
      });
      for (let [key, value] of Object.entries(map)) {
        res.push({ value, name: key });
      }
      this.optionA.series[0].data = res;
      return map;
    },
    getOptionB(map) {
      let max = 0;
      let indicator = [],
        number = [];

      for (let value of Object.values(map)) {
        max += value;
      }

      for (let [key, value] of Object.entries(map)) {
        indicator.push({ name: key, max, min: 0 });
        number.push(value);
      }

      (this.optionB.radar[0].indicator = indicator),
        (this.optionB.series[0].data[0].value = number);
    },
    getOptionC() {
      let res = new Array(7).fill(0),
        dayRange = [];
      let day = new Date().getDay();
      let { Y, M, D } = timeToYm(Date.now());
      day = day === 0 ? 7 : day;
      D = D - day + 1;
      //根据当前星期几 生成对应一周几号的集合
      for (let i = 0; i < 7; i++) {
        dayRange.push(D + i);
      }
      //然后循环数据 如果有几号的就+1
      this.chartData.forEach((item) => {
        if (item.Y === Y && item.M === M) {
          let index = dayRange.indexOf(item.D);
          if (index != -1) {
            res[index]++;
          }
        }
      });
      this.optionC = { series: [{ data: res }] };
    },
    formateChartData() {
      return blog.getAll().then((res) => {
        this.chartData = res.data.data.map((item) => {
          let obj = { type: item.type, ...timeToYm(item.created) };
          return obj;
        });
      });
    },
    getUserData() {
      user_infor.getUser().then((res) => {
        let data = res.data.data[0];
        /* this.text = data.introduce; */
        this.name = data.name;
        this.img = data.img;
        this.load = true;
      });
    },
  },
  mounted() {
    this.getUserData();
    this.formateChartData()
      .then(() => {
        return this.getOptionA();
      })
      .then((res) => {
        this.getOptionB(res);
      })
      .then(() => {
        this.getOptionC();
      });
  },
  components: {
    user,
    chart,
    myTitle,
    skill,
    album,
    load,
    project,
    hobby
  },
};
</script>
<style lang="scss">
.loadbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  margin-top: -20vh;
  background-color: white;
}
.myself {
  color: #000;
  min-height: 100vh;
  background-color: white;
  padding: 10px 20px;
  margin-top: -20vh;
  z-index: 660;
}
.charts {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  .chartsI {
    width: 100%;

    overflow: hidden;
  }
}
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

@media screen and (max-width: 980px) {
  .charts,
  .skills,
  .album,
  .project,
  .hobby
  {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .charts,
  .skills,
  .album,
  .project,
  .hobby {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>