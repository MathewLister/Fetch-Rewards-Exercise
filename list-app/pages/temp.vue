<template>
  <div>
    <h1 class="title">Fetch Rewards Exercise</h1>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :key="rows.id"
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
      data: [],
      rows: [],
      groupedRows: []
    };
  },
  asyncData() {
    return {
      getData() {
        this.$axios.get("api/hiring.json").then(
          response => {
            this.data = response.data;
            this.clean();
            console.log(this.data);
          },
          error => {
            console.log(error);
          }
        );
      }
    };
  },
  methods: {
    clean() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name === null || this.data[i].name === "") {
          this.$delete(this.data, i);
        }
      }
      this.rows = this.data;
      console.log("CLEAN");
    },
    groupBylistId(data, property) {
      return data.reduce((accumulator, currentValue) => {
        const key = obj[property];
        if (!accumulator[key]) {
          accumulator[key] = [];
        }
        // Add obj to  list for given key's value
        accumulator[key].push(obj);
        return accumulator;
      });
    }
  },
  mounted() {
    this.getData();
    //this.groupedRows = this.groupBylistId(this.rows, "listId");
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
  font-size: 10vw;
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
