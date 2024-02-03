//  Type é uma maneira conveniente de se referir às diferentes propriedades e funções que um valor possui.
// Ao usar type, você pode criar seus próprios tipos personalizados.

export type Product = {
    id: number,
    name: string,
    description: string, 
    category: string, 
    price: number
}

export class OrderLine {

    constructor(public product: Product, public quantity: number) { 
        //quando a gente define dentro da classe em typescript ele automaticamente cria os atributos da classe
    }

    get total(): number {
        return this.product.price * this.quantity
    }
}

export class Order {
    private 
}

// em programação orientada a objetos, um construtor é um método especial em uma classe que é chamado automaticamente quando um objeto da classe é criado. Ele é usado para realizar inicializações 
//necessárias no objeto, como atribuir valores iniciais às propriedades.