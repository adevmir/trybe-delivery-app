const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');
const { jwtUtil } = require('../../utils');

const { products } = require('../../database/models');

const { tokenCustomer } = require('../mocks/user.mock');
const { allProducts } = require('../mocks/products.mock');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota GET /customer/products', () => {
  before(async () => {
    sinon.stub(products, "findAll").resolves(allProducts);
  });
  
  after(()=>{
    (products.findAll).restore();
  })

  it('retorna produtos', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/customer/products')
      .send({ headers: { authorization: tokenCustomer } });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.equal(allProducts);
  })
})