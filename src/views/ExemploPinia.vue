<template>
    <div class="min-h-screen w-full bg-blue-300 p-4">
        <div class="max-w-3xl mx-auto p-4 bg-blue-500 rounded">
            <div class="w-full flex flex-col">
                <div class="w-full text-3xl text-white font-bold text-center">
                    Coisas pra fazer
                </div>
            </div>
            <div class="inline-flex items-end space-x-2">
                <div class="mt-5 w-full space-y-2">
                    <label for="descricao" class="text-white font-bold"
                        >Descrição</label
                    >
                    <input
                        id="descricao"
                        class="w-full px-2 py-1 border text-gray-800 focus:border-blue-600 border-gray-300"
                        type="text"
                        v-model="descricao"
                    />
                    <p v-if="errorMsg" class="text-base text-red-700">
                        {{ errorMsg }}
                    </p>
                </div>
                <div>
                    <button
                        @click="adicionarTarefa"
                        class="p-1 bg-white text-gray-800 hover:bg-blue-700 hover:text-white border rounded hover:outline-none"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
            <div class="mt-5">
                <h3 class="text-xl text-white font-bold">Minhas Tarefas</h3>
                <div v-if="tarefas.length == 0">
                    <div class="w-full">
                        <p class="p-2 text-white">Não há tarefas !</p>
                    </div>
                </div>
                <div v-else>
                    <ul class="mt-3">
                        <li
                            class="p-1 flex flex-row gap-2 items-center"
                            v-for="(tarefa, index) in tarefas"
                            :key="tarefa.id"
                            :class="index % 2 ? 'bg-blue-100' : 'bg-blue-200'"
                        >
                            <div class="flex-1 p-1">
                                <span class="text-gray-800">
                                    {{ tarefa.descricao }}
                                </span>
                            </div>
                            <div class="shrink p-1">
                                <button
                                    @click="toggleDone(tarefa)"
                                    class="p-1 hover:bg-blue-500 hover:text-white rounded-full"
                                >
                                    <svg
                                        v-if="tarefa.done"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                    <svg
                                        v-else
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button
                                    @click="apagarTarefa(tarefa)"
                                    class="p-1 hover:bg-red-600 hover:text-white rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { ITarefa } from '../domain/ITarefa';

import { TarefaStore } from '../store/TarefasStore';

const storeTarefa = TarefaStore();

const descricao = ref('');

const errorMsg = ref('');

// const tarefas: Tarefa[] = reactive([
//     { id: 1, descricao: 't1', done: false },
//     { id: 2, descricao: 't2', done: true }
// ]);

const tarefas = computed(() => storeTarefa.getTarefa());

const adicionarTarefa = () => {
    try {
        storeTarefa.adicionarTarefa(descricao.value);
    } catch (error: any) {
        // console.log(error);
        errorMsg.value = error.message;
    }
    // const tarefa = {
    //     id: Math.random(),
    //     descricao: descricao.value,
    //     done: false
    // };
    // tarefas.push(tarefa);
    //     descricao.value = '';
};

const apagarTarefa = (tarefa: ITarefa) => {
    storeTarefa.apagarTarefa(tarefa);
    // tarefas.splice(
    //     tarefas.findIndex((t) => t.id == tarefa.id),
    //     1
    // );
};

const toggleDone = (tarefa: ITarefa) => {
    storeTarefa.toggleDone(tarefa);
    // tarefas.map((t) => {
    //     if (t.id == tarefa.id) {
    //         t.done = !t.done;
    //     }
    // });
};
</script>
