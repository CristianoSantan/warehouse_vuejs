<template>
  <div>
    <h1>Galpões Cadastrados</h1>
  </div>
</template>

<script>
  export default {
    name: 'WareHouseList',

    async mounted() {
      this.getWareHouses();
    },

    methods: {
      async getWareHouses(){
        const response = await fetch('http://localhost:3000/api/v1/warehouses', { method: 'GET' });
        const result = await response.json();
        console.log(result);
      }
    }
  }
</script>

<style>

</style>