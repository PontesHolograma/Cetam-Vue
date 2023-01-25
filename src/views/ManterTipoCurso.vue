<script setup lang="ts">
import { computed, onBeforeMount, onMounted, reactive, ref } from 'vue';
import { TipoCursoStore } from '../store/TipoCursoStore';
import { useRouter } from 'vue-router';
import CategoriaDB from '../db/categoria.json';
import NivelEnsinoDB from '../db/nivelEnsino.json';
import { ICategoria } from '../domain/ICategoria';
import { INivelEnsino } from '../domain/INivelEnsino';
import { ITipoCursoLista } from '../domain/ITipoCursoLista';

const router = useRouter();

const storeTipoCurso = TipoCursoStore();

const selectedTipoCurso = computed(() => storeTipoCurso.getSelectedTipoCurso());

let selectedCategoria = ref(0);
let selectedNivelEnsino = ref(0);
let descricao = ref('');
const modoSalvar = ref('inserir');

const onClickedHome = () => {
    router.push({ name: 'home' });
};
const onClickedVoltar = () => {
    router.push({ name: 'tipo' });
};

const onClickedSalvar = async () => {
    const [categoria] = CategoriaDB.filter(
        (c) => c.id == selectedCategoria.value
    );
    const [nivelEnsino] = NivelEnsinoDB.filter(
        (n) => n.id == selectedNivelEnsino.value
    );

    if (modoSalvar.value == 'inserir') {
        const tipoCurso = {
            id: Math.random(),
            categoria: categoria,
            nivelEnsino: nivelEnsino,
            descricao: descricao.value
        };
        console.log('tipo: ', tipoCurso);

        await storeTipoCurso.adicionarTipoCurso(tipoCurso);
    } else {
        console.log('antigo ', selectedTipoCurso.value);
        const tipoCurso = {
            id: selectedTipoCurso.value.id,
            categoria: categoria,
            nivelEnsino: nivelEnsino,
            descricao: descricao.value
        };
        console.log('tipo: ', tipoCurso);
        await storeTipoCurso.alterarTipoCurso(tipoCurso);
    }

    router.push({ name: 'tipo' });
};

onBeforeMount(() => {
    console.log('antes de mounted....');
});

onMounted(() => {
    console.log('mounted....');
    const tipocurso: ITipoCursoLista = storeTipoCurso.getSelectedTipoCurso();
    console.log('tipo..', tipocurso);
    if (tipocurso) {
        modoSalvar.value = 'editar';
        console.log('testando..');
        selectedCategoria.value = tipocurso.categoria.id;
        selectedNivelEnsino.value = tipocurso.nivelEnsino.id;
        descricao.value = tipocurso.descricao;
    } else modoSalvar.value = 'inserir';
});
</script>

<template>
    <div class="bg-yellow-200 p-4">
        <div
            class="max-w-6xl mx-auto space-y-10 bg-yellow-400 p-4 rounded shadow-lg"
        >
            <div class="w-full flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">
                    Cadastro do Tipo de Curso
                </h1>
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
            <div class="w-full grid-row-2 grid md:grid-cols-2 gap-2">
                <div class="grid grid-rows-2">
                    <label for="" class="text-gray-600 font-bold"
                        >Categoria</label
                    >
                    <select
                        name="categoria"
                        id="categoria"
                        v-model="selectedCategoria"
                    >
                        <option value="0">Selecione uma categoria</option>
                        <option
                            v-for="categoria in CategoriaDB"
                            :key="categoria.id"
                            :value="categoria.id"
                        >
                            {{ categoria.descricao }}
                        </option>
                    </select>
                </div>
                <div class="grid grid-rows-2">
                    <label for="" class="text-gray-600 font-bold"
                        >Nível Ensino</label
                    >
                    <select v-model="selectedNivelEnsino">
                        <option value="0">Selecione Nivel de Ensino</option>
                        <option
                            v-for="nivelEnsino in NivelEnsinoDB"
                            :key="nivelEnsino.id"
                            :value="nivelEnsino.id"
                        >
                            {{ nivelEnsino.descricao }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="w-full">
                <label for="descricao" class="text-gray-600 font-bold"
                    >Descrição</label
                >
                <input
                    id="descricao"
                    class="w-full px-2 py-1 border text-gray-800 focus:border-blue-600 border-gray-300"
                    type="text"
                    v-model="descricao"
                />
            </div>

            <div class="w-full p-2 text-center space-x-16">
                <button
                    @click="onClickedVoltar"
                    class="py-2 px-1 bg-blue-500 hover:bg-blue-700 text-white font-bold border rounded"
                >
                    Voltar
                </button>
                <button
                    @click="onClickedSalvar"
                    class="py-2 px-1 bg-blue-500 hover:bg-blue-700 text-white font-bold border rounded"
                >
                    Salvar
                </button>
            </div>

            <div>{{ selectedTipoCurso }}</div>
        </div>
    </div>
</template>
