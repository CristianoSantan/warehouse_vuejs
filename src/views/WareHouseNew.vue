<template>
  <div>
    <h1>Cadastrar Galpão</h1>
    <div class="container">
      <v-alert v-if="msg != null" type="info">{{ msg }}</v-alert>
      <form v-on:submit.prevent>
        <v-text-field label="Código"     v-model="form.code"></v-text-field>
        <v-text-field label="Nome"       v-model="form.name"></v-text-field>
        <v-text-field label="Endereço"   v-model="form.address"></v-text-field>
        <v-text-field label="Cidade"     v-model="form.city"></v-text-field>
        <v-text-field label="Cep"        v-model="form.cep"></v-text-field>
        <v-text-field label="Área em m²" v-model="form.area"></v-text-field>
        <v-textarea   label="Descrição"  v-model="form.description"></v-textarea>
        
        <v-btn color="primary"           v-on:click="postWareHouse">Cadastrar</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WarehouseNew',
    data () {
      return {
        msg:null,
        form: {
          name:null,
          code:null,
          city:null,
          address:null,
          cep:null,
          area:null,
          description:null
        }
      }
    },

    methods: {
      async postWareHouse() {
        try {
          const response = await fetch('http://localhost:3000/api/v1/warehouses', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro na requisição: ${errorData.errors}`);
          }

          this.msg = 'Cadastrado com sucesso!';
          this.form = {}

        } catch (error) {
          this.msg = 'Ops, tente novamente!';
          console.error(error);
        }
      }
    }
  }
</script>

<style>
  .form {
    margin-bottom: 15px;
  }
  .form input {
    margin: 5px;
  }
</style>