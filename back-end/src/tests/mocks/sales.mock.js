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
  sellerId: 2,
  totalPrice: 9.7,
  deliveryAddress: 'Rua do Zé',
  deliveryNumber: '123',
  saleDate: '2023-01-24T18:02:42.875Z',
  status: 'Pendente'
}

const allOrders = [ newSale, {
  id: 2,
  userId: 3,
  sellerId: 2,
  totalPrice: 9.7,
  deliveryAddress: 'Rua do Zé',
  deliveryNumber: '123',
  saleDate: '2023-01-24T19:00:00.875Z',
  status: 'Pendente'
}]

const updateOrder = { status: 'Preparando' }

module.exports = { sale, newSale, allOrders, updateOrder };