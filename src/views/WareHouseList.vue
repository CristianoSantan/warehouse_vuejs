<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <div v-for="w in warehouses" :key="w.code">
      <WareHouse
        :id="w.id"
        :name="w.name"
        :code="w.code"
        :city="w.city"
        :address="w.address"
        :area="w.area"
      />
    </div>
  </div>
</template>

<script>
  import WareHouse from '@/components/WareHouse.vue';

  export default {
    name: 'WareHouseList',
    components: {
      WareHouse
    },
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