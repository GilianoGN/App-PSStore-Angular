export type GameData = {
    id: number;
    name: string;
    photo: string;
    gurl: string; // URL do jogo, talvez para detalhes
    label: string;
    categoria: string[]; // Array de strings para categorias
    console: string[];   // Array de strings para consoles
    price: string;
}