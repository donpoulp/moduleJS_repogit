<template>
  <div class="suppliersList">
    <h1>Liste des fournisseurs</h1>
  <div>
    <table>
      <tr>
        <th>
         nom
        </th>
        <th>
          status
        </th>
        <th>
          Date de mise a jour
        </th>
      </tr>
      <Supplier v-for="supplier in suppliers" :key="supplier.id"
              :name="supplier.name"
              :status="supplier.status"
              :checkedAt="supplier.updated_at">
      </Supplier>
    </table>
  </div>
    
  </div>
</template>

<script>
import axios from "axios";
import Supplier from "./Suppliers";
export default {
  name: 'SuppliersList',
  components: {Supplier},
  data() {
    return{

      suppliers: [],
      error: null,
      errored: false

    };

  },
  created() {
    axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data;
          console.log(this.suppliers)
        })
        .catch(error =>{
              this.error = error;
              this.errored = true;
            }
        )
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table{
  margin-left: auto;
  margin-right: auto;
  width: 100%; /* largeur obligatoire pour être centré */
}
table th {
  border-bottom: 2px solid;
  border-width: 100%;
}
</style>