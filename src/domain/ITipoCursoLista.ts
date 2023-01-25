interface INivelEnsino {
    id: number;
    descricao: string;
}
interface ICategoria {
    id: number;
    descricao: string;
}

export interface ITipoCursoLista {
    id: number;
    descricao: string;
    nivelEnsino: INivelEnsino;
    categoria: ICategoria;
}
