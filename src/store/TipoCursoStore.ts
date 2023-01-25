import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { ICategoria } from '../domain/ICategoria';
import { ITipoCursoLista } from '../domain/ITipoCursoLista';
import { ITipoCurso } from './../domain/ITipoCurso';
import { INivelEnsino } from './../domain/INivelEnsino';

const tipoCursoInit = {
    id: 0,
    descricao: '',
    nivelEnsino: {} as INivelEnsino,
    categoria: {} as ICategoria
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
                nivelEnsino: { id: 1, descricao: 'basico' },
                categoria: { id: 1, descricao: 'curso formacao' }
            },
            {
                id: 3,
                descricao: 'teste 3',
                nivelEnsino: { id: 1, descricao: 'basico' },
                categoria: { id: 1, descricao: 'curso formacao' }
            }
        ] as ITipoCursoLista[],
        selectedTipoCurso: tipoCursoInit as ITipoCursoLista
    });

    const getTipoCurso = () => {
        return data.tipoCurso;
    };
    const getSelectedTipoCurso = () => {
        return data.selectedTipoCurso;
    };

    const adicionarTipoCurso = async (item: ITipoCursoLista): Promise<void> => {
        // return new Promise((resolve) => {
        data.tipoCurso.push(item);
        // resolve();
        // });
    };

    const apagarTipoCurso = (tipoCurso: ITipoCursoLista) => {
        console.log(tipoCurso);
        data.tipoCurso.splice(
            data.tipoCurso.findIndex((t) => t.id == tipoCurso.id),
            1
        );
    };

    const alterarTipoCurso = async (
        tipoCurso: ITipoCursoLista
    ): Promise<void> => {
        data.tipoCurso.map((t) => {
            if (t.id == tipoCurso.id) {
                t.descricao = tipoCurso.descricao;
                t.categoria = tipoCurso.categoria;
                t.nivelEnsino = tipoCurso.nivelEnsino;
            }
        });
    };

    const setarSelectedTipoCurso = (tipoCurso: ITipoCursoLista | null) => {
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
        getSelectedTipoCurso,
        alterarTipoCurso
    };
});
