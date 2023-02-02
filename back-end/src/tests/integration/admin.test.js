const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');
const { jwtUtil } = require('../../utils');

const { users } = require('../../database/models');

const { tokenCustomer, regCustomer, tokenSeller, seller, usersList, admin, tokenAdmin } = require('../mocks/user.mock');
const { sale, newSale, allOrders, updateOrder } = require('../mocks/sales.mock');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota GET /admin/manage', () => {
  let chaiHttpResponse;

  it('é possível criar um novo pedido corretamente', async () => {
    sinon.stub(users, "findAll").resolves({ dataValues: usersList });
    sinon.stub(jwtUtil, 'readToken').resolves(admin)

    chaiHttpResponse = await chai
      .request(app)
      .get('/admin/manage')
      .set('authorization', tokenAdmin);

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.equal(usersList);
  });
});