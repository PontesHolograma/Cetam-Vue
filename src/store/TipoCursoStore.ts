import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { ITipoCursoLista } from '../domain/ITipoCursoLista';
import { ITipoCurso } from './../domain/ITipoCurso';

const tipoCursoInit = {
    id: 0,
    descricao: '',
    nivelEnsino: '',
    categoria: ''
};

export const TipoCursoStore = defineStore('tipoCursoStore', () => {
    const data = reactive({
        tipoCurso: [
            {
                id: 1,
                descricao: 'teste 1',
                nivelEnsino: { id: 1, descricao: 'basico' },
                categoria: { id: 1, descricao: 'curso formacao' }
            },
            {
                id: 2,
                descricao: 'teste 2',
                nivelEnsino: 'basico',
                categoria: 'curso formacao'
            },
            {
                id: 3,
                descricao: 'teste 3',
                nivelEnsino: 'basico',
                categoria: 'curso formacao'
            }
        ] as ITipoCursoLista[],
        selectedTipoCurso: tipoCursoInit as ITipoCurso
    });

    const getTipoCurso = () => {
        return data.tipoCurso;
    };
    const getSelectedTipoCurso = () => {
        return data.selectedTipoCurso;
    };

    const adicionarTipoCurso = async (item: ITipoCurso): Promise<void> => {
        return new Promise((resolve) => {
            data.tipoCurso.push(item);
            resolve();
        });
    };

    const apagarTipoCurso = (tipoCurso: ITipoCurso) => {
        console.log(tipoCurso);
        data.tipoCurso.splice(
            data.tipoCurso.findIndex((t) => t.id == tipoCurso.id),
            1
        );
    };

    const setarSelectedTipoCurso = (tipoCurso: ITipoCurso | null) => {
        if (tipoCurso) {
            data.selectedTipoCurso = tipoCurso;
        } else {
            data.selectedTipoCurso = tipoCursoInit;
        }
    };

    return {
        getTipoCurso,
        adicionarTipoCurso,
        apagarTipoCurso,
        setarSelectedTipoCurso,
        getSelectedTipoCurso
    };
});
