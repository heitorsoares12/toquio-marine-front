export class Endereco {
    constructor(
        public logradouro?: string,
        public complemento?: string,
        public bairro?: string,
        public localidade?: string,
        public uf?: string,
        
    ) { }

    static fromJson(dadosJson: any): Endereco {
        return Object.assign(new Endereco(), dadosJson);
    }
}






