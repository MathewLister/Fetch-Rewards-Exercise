<template>
  <div>
    <h1 class="title">Fetch Rewards Exercise</h1>
    <table>
      <thead>
        <tr>
          <th>ListID</th>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in groupOne" :key="i">
          <td>{{ item.listId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>
        </tr>
        <tr v-for="(item, i) in groupTwo" :key="i">
          <td>{{ item.listId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>
        </tr>
        <tr v-for="(item, i) in groupThree" :key="i">
          <td>{{ item.listId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>
        </tr>
        <tr v-for="(item, i) in groupFour" :key="i">
          <td>{{ item.listId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      groupOne: "getGroupOne",
      groupTwo: "getGroupTwo",
      groupThree: "getGroupThree",
      groupFour: "getGroupFour"
    })
  },
  methods: {
    ...mapActions({
      fetch: "loadData"
    }),
    fetchData() {
      this.fetch();
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 10vw;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
