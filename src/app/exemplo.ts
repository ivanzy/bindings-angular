class Computador {
  processador: Processador;
  ram: Ram;
  constructor(processador: Processador, memoriaRam: Ram) {
    this.processador = processador;
    this.ram = memoriaRam;
  }
}

class Ram {
  tamanho: number = 0;
  marca: string = 'marca';
  frequencia: number = 0;

  constructor(tamanho: number, marca: string, f: number) {
    this.frequencia = f;
    this.tamanho = tamanho;
    this.marca = marca;
  }
}

class Processador {
  nucleos: number;
  marca: string;
  geracao: string;
  constructor(nucleos: number, marca: string, geracao: string) {
    this.nucleos = nucleos;
    this.marca = marca;
    this.geracao = geracao;
  }
}
