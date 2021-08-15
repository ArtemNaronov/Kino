<template>
  <div class="breadCrumb">
    <ul>
      <li
        v-for="item in this.b_path"
        :key="item.id"
        v-if="!item[2] && item[0] != 'page' && item[0] != 'search'"
      >
        <a v-bind:href="item[1]">
          {{ item[0] }}
        </a>
      </li>
      <li v-else-if="item[0] != 'page' && item[0] != 'search'" class="active">
        {{ item[0] }}
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  head: {
    script: [],
    link: [],
  },
  data() {
    return {
      b_path: [],
    };
  },
  components: {},
  mounted() {
    this.get_url();
  },
  created() {},
  methods: {
    async get_url() {
      this.b_path.push(["Home", "/", false]);
      let temp = this.$route.path.split("&");
      let string_path_arr = temp[0].split("/");

      let summaru_path = "";
      for (let i = 1; i < string_path_arr.length; i++) {
        if (i == string_path_arr.length - 1 ) {
          this.b_path.push([
            string_path_arr[i].replace(/\-/g, " "),
            string_path_arr[i - 1] + "/" + string_path_arr[i],
            true,
          ]);
        }
      }
    },
  },
};
</script>
