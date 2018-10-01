class Order {
    constructor(
        public andress : string,
        public number: number,
        public optionalAndress: string,
        public paymentOptions: string,
        public orderItens: OrderItem[] = []
    ){}

}

class OrderItem {
    constructor(public quantity: number, public menuId : string) {}
}

export {Order, OrderItem}