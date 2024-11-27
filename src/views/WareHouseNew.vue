<template>
  <div>
    <h1>Cadastrar Galpão</h1>
    <div class="container">
      <div>{{ msg }}</div>
      <form v-on:submit.prevent>
        <div class="form">
          <label for="code">Nome: </label>
          <input type="text" v-model="form.code" id="" placeholder="Código">
        </div>
        <div class="form">
          <label for="name">Nome: </label>
          <input type="text" v-model="form.name" id="" placeholder="Nome do galpão">
        </div>
        <div class="form">
          <label for="address">Endereço: </label>
          <input type="text" v-model="form.address" id="" placeholder="Endereço">
        </div>
        <div class="form">
          <label for="city">Cidade: </label>
          <input type="text" v-model="form.city" id="" placeholder="Cidade">
        </div>
        <div class="form">
          <label for="cep">CEP: </label>
          <input type="text" v-model="form.cep" id="" placeholder="Cep">
        </div>
        <div class="form">
          <label for="area">Área m²: </label>
          <input type="number" v-model="form.area">
        </div>
        <div class="form">
          <label for="description">Descrição: </label>
          <textarea cols="30" rows="5" v-model="form.description"></textarea>
        </div>
        <div class="form">
          <button v-on:click="postWareHouse">Cadastrar</button>
        </div>
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