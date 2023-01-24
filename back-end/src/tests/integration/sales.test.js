const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');
const { jwtUtil } = require('../../utils');

const { sales, salesProducts } = require('../../database/models');

const { tokenCustomer } = require('../mocks/user.mock');
const { sale, newSale, allOrders } = require('../mocks/sales.mock');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota POST /customer/checkout', () => {
  let chaiHttpResponse;

  it('é possível criar um novo pedido corretamente', async () => {
    sinon.stub(sales, "create").resolves({ dataValues: newSale });
    sinon.stub(salesProducts, "bulkCreate").resolves();

    chaiHttpResponse = await chai
      .request(app)
      .post('/customer/checkout')
      .set('authorization', tokenCustomer)
      .send(sale);

    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body.id).to.be.equal(1);
  });
});

describe('Testando rota GET /customer/orders/:id', () => {
  let chaiHttpResponse;

  it('é possível listar pedido por id', async () => {
    sinon.stub(sales, "findByPk").resolves(newSale);

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer/orders/1')
      .set('authorization', tokenCustomer)

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(newSale);
  });

  it('retorna erro caso pedido não exista', async () => {
    (sales.findByPk).restore();
    sinon.stub(sales, "findByPk").resolves(null);

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer/orders/99')
      .set('authorization', tokenCustomer)

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(chaiHttpResponse.body.message).to.be.equal('Not found');
  });
});

describe('Testando rota GET /customer/orders', () => {
  let chaiHttpResponse;

  it('é possível listar pedidos', async () => {
    sinon.stub(sales, "findAll").resolves(allOrders);

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer/orders')
      .set('authorization', tokenCustomer)

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allOrders);
  });
});