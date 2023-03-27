export interface IAnimal{
    id: number;
    nombre: string;
    edad: number;
    descripcion: string;
    color: string;
    peso: number;
    imagen: string;
    esViejo: boolean;
}

export class Animal implements IAnimal{
    constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public descripcion: string,
    public color: string,
    public peso: number,
    public imagen: string,
    public esViejo: boolean,
    ){}

    alternarGatosViejos(ev: MouseEvent) {
        console.log(ev);
        this.esViejo = !this.esViejo;
    }
}