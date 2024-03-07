<template>
  <h2>Entrada de Gastos</h2>
  <div class="container col-sm-3">
    <label class="form-label mt-4">Valor do Gasto</label>
    <div class="input-group mb-3">
      <span class="input-group-text">R$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    </div>
    <div>
      <label for="expense-description" class="form-label mt-4">Descrição do Gasto</label>
      <textarea class="form-control" id="expense-description" rows="3"></textarea>
    </div>
    <div>
      <label for="expense-date" class="form-label mt-4">Data do Gasto</label>
      <VueDatePicker 
        locale="pt-br" 
        v-model="date"
        :action-row="{ showNow: true }" 
        now-button-label="Agora"
      ></VueDatePicker>
    </div>
    <button class="btn btn-primary">Salvar</button>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'ExpenseAdd',
  components: {
    VueDatePicker
  },
  data() {
    return {
      date: null
    }
  }
}
</script>


<style>
label {
  text-align: left;
  width: 100%;
}

button {
  margin: 40px;
}
</style>
