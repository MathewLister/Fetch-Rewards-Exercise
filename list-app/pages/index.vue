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
        <tr v-for="(row, i) in rows" :key="i">
          <td>{{ row.listId }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.id }}</td>
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
      rows: "getData"
    })
  },
  methods: {
    ...mapActions({
      fetch: "loadData",
      clean: "cleanData"
    }),
    fetchData() {
      this.fetch();
    },
    cleanData() {
      this.clean();
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
