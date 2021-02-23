export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.id = Math.random() * 10000000000000000;
    this.completado = false;
    this.texto = texto || '';
  }
}
