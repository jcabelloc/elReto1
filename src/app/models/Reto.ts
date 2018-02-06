export interface Reto { 
    id?:string;
    retador: string;
    retadorNombre: string;
    retadoNombre: string;
    retado: string; 
    difPuestos: number; 
    fecha:Date; 
    sede: string;
    estado: string;
    resultados: any[];
    vencedor: string;
    vencedorNombre: string;
    perdedor: string;
    perdedorNombre: string;
    scoreVencedor: number;
    scorePerdedor: number;
}
export interface RetoId extends Reto { 
    id: string;
 }