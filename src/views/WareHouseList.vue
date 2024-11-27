<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <v-text-field label="Buscar Galpão" v-model="term" class="my-5"></v-text-field>
    <v-card dark>
      <v-card-text>
        <WareHouseTable :warehouses="filterWareHouse"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import WareHouse from '@/components/WareHouse.vue';
  import WareHouseTable from '@/components/WareHouseTable.vue';

  export default {
    name: 'WareHouseList',
    components: {
      WareHouse,
      WareHouseTable
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