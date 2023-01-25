import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { ITarefa } from '../domain/ITarefa';

export const TarefaStore = defineStore('tarefaStore', () => {
    const data = reactive({
        tarefas: [] as ITarefa[]
    });

    const getTarefa = () => {
        return data.tarefas;
    };

    const adicionarTarefa = (descricao: string) => {
        if (!descricao) throw new Error('Descricao invalida!');
        const tarefa = {
            id: Math.random(),
            descricao: descricao,
            done: false
        };
        data.tarefas.push(tarefa);
    };

    const apagarTarefa = (tarefa: ITarefa) => {
        data.tarefas.splice(
            data.tarefas.findIndex((t) => t.id == tarefa.id),
            1
        );
    };

    const toggleDone = (tarefa: ITarefa) => {
        data.tarefas.map((t) => {
            if (t.id == tarefa.id) {
                t.done = !t.done;
            }
        });
    };

    return {
        getTarefa,
        adicionarTarefa,
        apagarTarefa,
        toggleDone
    };
});
