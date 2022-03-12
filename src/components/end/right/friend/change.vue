<template>
  <div class="type">
    <list :title="title">
      <template v-slot:body>
        <tr v-for="(item, index) in listData" :key="index" :data-id="item.id" >
          <td>{{ index + 1 + pageSize * (page - 1) }}</td>
          <td>{{ item.say }}</td>
          <td>{{ item.img }}</td>
          <td>{{ item.url }}</td>
          <td>{{ item.name }}</td>
          <td>
            <button @click="change">编辑</button>
            <button @click="deleted">删除</button>
          </td>
        </tr>
      </template>
    </list>
    <page
      v-if="totalPage"
      @getPage="getPage"
      :pageSize="pageSize"
      :pageCount="pageCount"
      :totalPage="totalPage"
    />
  </div>
</template>
<script>
import page from "../../../common/page";
import list from "../../../common/form";
import {link} from "../../../../http/api"
import { getLink ,deletedLink} from "../../../../http/link";
export default {
  data() {
    return {
      title: ["序号", "友链简介", "友链logo", "友链地址", "友链名称", "操作"],
      data: [],
      flag: false,
      isChange: false,
      allCount: 0,
      pageSize: 10,
      pageCount: 10,
      page: 1,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.allCount / this.pageSize);
    },
    /* 本地存储分页 */
    listData() {
      let end =
        this.page * this.pageSize > this.allCount
          ? this.allCount
          : this.page * this.pageSize;
      let start = (this.page - 1) * this.pageSize;

      return this.data.slice(start, end);
    },
  },
  components: {
    page,
    list,
  },
  methods: {
    begin() {
      this.flag = true;
    },
    close(value) {
      this.flag = value;
      this.isChange = value;
    },
    save(value) {
      changeType(this.type, value)
        .then((res) => {
          this.close();
          this.httpType();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add(value) {
      addType(value)
        .then((res) => {
          if (res.data.error != 1) alert("成功添加");
          else alert("已有该类型");
          this.flag = false;

          //这里id到时候要改
          this.httpType();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    httpLink() {
      link.getLink().then((res) => {
        this.data = res.data.data;
        this.allCount = res.data.data.length;
      });
    },
    deleted(e) {
      const id = e.target.parentElement.parentElement.dataset.id;

      link.deletedLink(id)
        .then((res) => {
          this.httpLink();
        alert('删除成功');
        })
        .catch((err) => {
          alert('删除失败');
        });
    },
    change(e) {
      const id = e.target.parentElement.parentElement.dataset.id;
     this.$router.push({ path: "/end/friend/add", query: { id } });
    },
    getPage(obj) {
      this.page = obj.page;
    },
  },
  mounted() {
    this.httpLink();
  },
};
</script>
<style lang="scss">
.type {
  position: relative;
  margin: 10px 20px;
}
</style>