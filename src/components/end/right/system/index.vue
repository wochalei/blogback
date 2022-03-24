<template>
  <div class="f_control">
    <form @submit.prevent="false" ref="f_sys">
      <table class="f_ta">
        <tr>
          <td>首页图片:</td>
          <td v-if="img_one">
            <input type="text" name="img_one" v-model="one" />
          </td>
          <td v-else><input type="file" name="img_one" id="img_one" /></td>
          <td>
            <button @click="img_one = !img_one">切换</button>
          </td>
        </tr>
        <tr>
          <td>内容页图片:</td>
          <td v-if="img_two">
            <input type="text" name="img_two" v-model="two" />
          </td>
          <td v-else><input type="file" name="img_two" id="img_two" /></td>
          <td>
            <button @click="img_two = !img_two">切换</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><button @click="save">保存</button>
          <button class="exit" @click="exit">账号退出</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
import { system } from "../../../../http/api";
export default {
  data() {
    return {
      img_one: true,
      img_two: true,
      one: "",
      two: "",
    };
  },
  methods: {
    save() {
      let table = this.$refs.f_sys,
        formdata = new FormData(table);
      system.updateSystem(formdata).then((res) => {
        alert("保存成功");
      });
    },
    exit(){
      localStorage.setItem('user_id','');
      this.$router.push("/login");
    }
  },
  mounted() {
    system.getSystem().then((res) => {
      this.one = res.data.data[0].img_one;
      this.two = res.data.data[0].img_two;
    });
  },
};
</script>
<style lang="scss">
.f_control {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    .exit{
      margin-left: 30px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
  }
  input[type="file"] {
    width: auto;
    height: unset;
    text-indent: 0;
    border: none;
    border-radius: 0;
  }
}
</style>