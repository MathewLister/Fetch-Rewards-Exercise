<template>
  <div>
    <div>
      <h1 class="title">Fetch Rewards Exercise</h1>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>ListID</th>
            <th>Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in groupOne" :key="item.id">
            <td>{{ item.listId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.id }}</td>
          </tr>
          <tr v-for="(item, i) in groupTwo" :key="item.id">
            <td>{{ item.listId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.id }}</td>
          </tr>
          <tr v-for="(item, i) in groupThree" :key="item.id">
            <td>{{ item.listId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.id }}</td>
          </tr>
          <tr v-for="(item, i) in groupFour" :key="item.id">
            <td>{{ item.listId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

<style scoped>
.table {
  margin: auto;
  width: 75%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
  border-radius: 4px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  border-bottom: 2px solid lightgray;
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
  font-weight: 400;
  font-size: 9vw;
  color: #000000;
  letter-spacing: 1px;
  text-align: center;
}

@media only screen and (max-device-width: 755px) {
  /* For mobile phones: */
  .table {
    width: 100%;
    box-shadow: none;
  }

  .title {
    font-size: 8vw;
  }
}
</style>
