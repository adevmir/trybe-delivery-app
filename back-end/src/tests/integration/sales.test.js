const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');
const { jwtUtil } = require('../../utils');

const { sales, salesProducts } = require('../../database/models');

const { tokenCustomer } = require('../mocks/user.mock');
const { sale } = require('../mocks/sales.mock');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota POST /customer/checkout', () => {
  let chaiHttpResponse;

  it('é possível criar uma nova venda corretamente', async () => {
    sinon.stub(sales, "create").resolves(sale);
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