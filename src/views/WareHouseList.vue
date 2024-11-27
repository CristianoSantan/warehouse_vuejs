<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <input class="form" type="text" placeholder="Buscar Galpão" v-model="term">

    <div v-for="w in filterWareHouse" :key="w.code">
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
        warehouses: [],
        term: ''
      }
    },

    async mounted() {
      this.getWareHouses();
    },

    methods: {
      async getWareHouses(){
        const response = await fetch('http://localhost:3000/api/v1/warehouses', { method: 'GET' });
        const result = await response.json();

        this.warehouses = result;
        return this.warehouses;
      }
    },
    
    computed: {
      filterWareHouse() {
        return this.warehouses.filter(warehouse => {
          return warehouse.name.toLowerCase().includes(this.term.toLowerCase())
        })
      }
    }
  }
</script>

<style>

</style>