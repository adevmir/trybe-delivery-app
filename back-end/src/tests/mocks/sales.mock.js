const sale = {
  sellerId: 1,
  products: [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
  ],
  totalPrice: 9.70,
  deliveryAddress: 'Rua do Zé',
  deliveryNumber: '123',
};

const newSale = {
  id: 1,
  userId: 3,
  sellerId: 1,
  totalPrice: 9.7,
  deliveryAddress: 'Rua do Zé',
  deliveryNumber: '123',
  saleDate: '2023-01-24T18:02:42.875Z',
}

module.exports = { sale, newSale };