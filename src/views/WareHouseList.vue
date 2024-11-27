<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <table border="1px">
      <thead>
        <th>Códio</th>
        <th>Nome</th>
        <th>Sigla</th>
      </thead>
      <tbody>
        <tr v-for="w in warehouses" :key="w.code">
          <td>{{ w.id }}</td>
          <td>{{ w.name }}</td>
          <td>{{ w.code }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'WareHouseList',
    data(){
      return{
        warehouses: []
      }
    },

    async mounted() {
      this.getWareHouses();
    },

    methods: {
      async getWareHouses(){
        const response = await fetch('http://localhost:3000/api/v1/warehouses', { method: 'GET' });
        const result = await response.json();
        console.log(result);

        this.warehouses = result;
        return this.warehouses;
      }
    }
  }
</script>

<style>

</style>