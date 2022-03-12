<template>
  <div class="f_control">
    <table class="f_ta">
      <tr>
        <td>友链名称:</td>
        <td><input type="text" v-model="obj.name" /></td>
      </tr>
      <tr>
        <td>友链地址:</td>
        <td><input type="text" v-model="obj.url" /></td>
      </tr>
      <tr>
        <td>友链logo地址:</td>
        <td><input type="text" v-model="obj.img" /></td>
      </tr>
      <tr>
        <td>友链个性说说:</td>
        <td><input type="text" v-model="obj.say" /></td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button @click="add">{{ flag ? "修改" : "添加" }}</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import{link} from '../../../../http/api'
import { reactive } from "vue";
export default {
  data() {
    return {
      obj: reactive({ name: "", url: "", img: "", say: "" }),
      flag: false,
    };
  },
  methods: {
    init() {
      for (let item in this.obj) {
        this.obj[item] = "";
      }
    },
    add() {
      if (!this.flag) {
        link.addLink(this.obj)
          .then((res) => {
            alert("添加成功");
            this.init();
          })
          .catch((err) => {
            console.log(err);
            alert("添加失败");
          });
      } else {
        link.updateLink(this.obj)
          .then((res) => {
            alert("修改成功");
            this.$router.push({path:'/end/friend/change'})
          })
          .catch((err) => {
            console.log(err);
            alert("修改失败");
          });
      }
    },
    get(id) {
      link.getLink(id).then((res) => {
        this.obj = res.data.data[0];
      });
    },
  },
  mounted() {
    this.init();
    if (this.$route.query.id) {
      this.flag = true;
      this.obj.id = this.$route.query.id;
      this.get(this.obj.id);
    }
  },
};
</script>
<style lang="scss">
.f_control {
  width: 100%;
  padding-top: 20px;

  .f_ta {
    width: 80%;
    max-width: 900px;
    min-width: 600px;
    border-spacing: 20px 30px;
    margin: 0 auto;
    td:nth-child(1) {
      width: 0px;
      text-align: right;
      white-space: nowrap;
    }
    td:nth-child(2) {
      
    }
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
  }
}
</style>