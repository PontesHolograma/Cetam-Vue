<template>
    <div class="bg-yellow-200 p-4">
        <div
            class="max-w-6xl mx-auto space-y-10 bg-yellow-400 p-4 rounded shadow-lg"
        >
            <div class="w-full flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Tipo de Curso</h1>
                <botton
                    @click="onClickedHome"
                    class="p-2 text-white bg-red-700 hover:bg-red-500 rounded"
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
                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                    </svg>
                </botton>
            </div>
            <div class="w-full space-y-4">
                <div class="w-full inline-flex justify-between items-end">
                    <div class="inline-flex space-x-2">
                        <div class="flex flex-col space-y-1">
                            <label class="w-full font-bold text-gray-600" for=""
                                >Pesquisar Tipo de Curso</label
                            >
                            <input
                                class="w-full px-2 py-1 border text-gray-800 focus:border-blue-600 border-gray-300"
                                type="text"
                                v-model="pesquisar"
                            />
                        </div>
                        <div class="flex items-end">
                            <button
                                @click=""
                                class="p-1 bg-blue-900 text-white hover:bg-blue-700 rounded inline-flex space-x-2"
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
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                                <span>Pesquisar</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            @click="onClickedManter"
                            class="p-1 bg-blue-900 text-white hover:bg-blue-700 rounded inline-flex space-x-2"
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
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>

                            <span>Novo</span>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col space-y-1">
                    <label class="w-full text-gray-600 font-bold" for=""
                        >Nivel de Ensino</label
                    >
                    <div class="w-full inline-flex space-x-2">
                        <input type="radio" name="nivelEnsino" value="" />
                        Básico<br />
                        <input type="radio" name="nivelEnsino" value="" />
                        Técnico<br />
                        <input type="radio" name="nivelEnsino" value="" />
                        Técnólogo<br />
                        <input type="radio" name="nivelEnsino" value="" /> Pós
                        Graduação<br />
                    </div>
                </div>
            </div>
            <div class="w-full p-1">
                <div
                    class="mt-5 p-2 font-bold text-red-600"
                    v-if="dados.length == 0"
                >
                    <h3>Não foram encontrados</h3>
                </div>
                <div
                    class="w-full flex flex-col p-1"
                    :class="item.id % 2 ? 'bg-yellow-100' : 'bg-yellow-200'"
                    v-for="(item, i) in dados"
                    :key="item.id"
                >
                    <div
                        class="flex flex-row space-x-2 p-1 bg-yellow-500 font-semibold"
                    >
                        <div class="w-1/2" v-if="i == 0">Descrição</div>
                        <div class="w-1/4" v-if="i == 0">Nível de Ensino</div>
                        <div class="w-1/3" v-if="i == 0">Categoria</div>
                        <div class="w-1/6" v-if="i == 0">Ação</div>
                    </div>
                    <div class="flex flex-row space-x-2 p-1 items-center">
                        <div class="w-1/2">
                            {{ item.descricao }}
                        </div>
                        <div class="w-1/4">
                            {{ item.nivelEnsino.descricao }}
                        </div>
                        <div class="w-1/3">
                            {{ item.categoria.descricao }}
                        </div>
                        <div class="flex w-1/6 items-center space-x-5">
                            <button
                                @click="onClickedBtnEditar(item)"
                                class="p-1 hover:text-white hover:bg-blue-600 hover:rounded-full"
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
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                </svg>
                            </button>
                            <button
                                @click="onClickedBtnExcluir(item)"
                                class="p-1 hover:text-white hover:bg-red-600 hover:rounded-full"
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { TipoCursoStore } from '../store/TipoCursoStore';
import { ITipoCursoLista } from '../domain/ITipoCursoLista';

const router = useRouter();

const storeTipoCurso = TipoCursoStore();

const dados = computed(() => {
    const tipoCurso = storeTipoCurso.getTipoCurso();

    if (pesquisar) {
        return tipoCurso.filter(
            (t) => t.descricao.indexOf(pesquisar.value) >= 0
        );
    }

    return tipoCurso;
});

const pesquisar = ref('');
const errorMsg = ref('');

const onClickedManter = () => {
    storeTipoCurso.setarSelectedTipoCurso(null);
    router.push({ name: 'tipoEditar' });
};

const onClickedHome = () => {
    router.push({ name: 'home' });
};

const onClickedtipo = () => {
    router.push({ name: 'tipo' });
};

const onClickedBtnExcluir = (item: ITipoCursoLista) => {
    storeTipoCurso.apagarTipoCurso(item);
};

const onClickedBtnEditar = (item: ITipoCursoLista) => {
    storeTipoCurso.setarSelectedTipoCurso(item);
    router.push({ name: 'tipoEditar' });
};
</script>
