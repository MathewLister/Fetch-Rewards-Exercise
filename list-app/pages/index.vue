<template>
  <div>
    <h1>Fetch Rewards Exercise</h1>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      theme="black-rhino"
    >
      <div slot="emptystate">
        <h1>Hmm....Something went wrong please try again</h1>
      </div>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: "ListID",
          field: "listId",
          sortable: false
        },
        {
          label: "Name",
          field: "name",
          sortable: false
        },
        {
          label: "ID",
          field: "id",
          sortable: false
        }
      ],
      rows: []
    };
  },
  methods: {
    getData() {
      this.$axios.get("api/hiring.json").then(
        response => {
          console.log(response.data);
          this.rows = response.data;
          console.log(this.data);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
