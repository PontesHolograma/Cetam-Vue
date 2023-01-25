<script setup lang="ts">
import { computed, ref, reactive } from 'vue';

  const Titulo = 'Folha de PGTO'

      
  const salario = ref(0)

  // const fgts = computed(() => {
  //   if (salario.value > 0) return salario.value * 0.30
  //   return 0
  // })

  const calcularFgts = (salario: number) => {
    if (salario > 0) return salario * 0.30
    return 0
  }

  type IFuncionario = {
      nome: string;
      salario: number;
    }

  const listaFuncionarios: IFuncionario[] = reactive([])

  const adicionarFuncionario = () => {
    const funcionario = {
      nome: nome.value,
      salario: salario.value
    }
    listaFuncionarios.push(funcionario)
    nome.value = ''
    salario.value = 0
  }

  const qtdeFuncionarios = computed(() => listaFuncionarios.length)
   
</script>

<template>
 <div class="w-full px-5">
  <div>
    <h1 class="mt-5 titulo uppercase text-center mb-5">{{ Titulo }}</h1>
   
   <div class="my-5 flex flex-col space-y-2">
     <div class="w-full flex flex-col">
       <label for="Nome" class=" text-gray-900 antialiased font-bold">Nome Completo</label>
       <input type="text" placeholder="Diga nome do funcionario" v-model="nome" class="border-2 border-gray-300 px-2 py-1">
     </div>
     <div class="w-full flex flex-col">
       <label for="salario" class=" text-gray-900 antialiased font-bold">Salario</label>
       <input type="text" placeholder="entre com o salário" v-model="salario" class="border-2 border-gray-300 px-2 py-1">
     </div>
     <div  class="w-full">
       <button @click="adicionarFuncionario" class="p-2 bg-blue-700 text-white hove:bg-blue-500 rounded">Adicionar</button>
     </div>
   </div>
   <p class="my-5 font-bold">
   Qtde: {{ qtdeFuncionarios  }}
 </p> 
   <div class="w-full flex flex-col" 
v-for="(funcionario,i) in listaFuncionarios" :key="i">
  <div v-if="i==0" class="w-full flex flex-row space-x-2 mb-1">
    <div class="flex-1 font-bold text-gray-800 bg-gray-300">Nome Completo</div>
    <div class="flex-1 font-bold text-gray-800 bg-gray-300">Salario</div>
    <div class="flex-1 font-bold text-gray-800 bg-gray-300">Fgts</div>
  </div>
  <div class="w-full flex flex-row items-center space-x-2 mb-2" :class="i % 2 ? 'bg-gray-200' : 'bg-gray-100'">
    <div class="flex-1 text-left">{{funcionario.nome}}</div>
    <div class="flex-1 text-right">{{funcionario.salario}}</div>
    <div class="flex-1 text-right">{{calcularFgts(funcionario.salario)}}</div>
  </div>
</div>
 
 
 <!-- <p>
   Funcionarios: {{ listaFuncionarios }}
 </p> -->

  </div>

</div>
</template>

<style scoped>
  .titulo {
    font-size: larger;
    color: chocolate;
    font-weight: bold;
  }
</style>
