const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');

const { products } = require('../../database/models');

const { tokenCustomer, usersList } = require('../mocks/user.mock');
const { allProducts } = require('../mocks/products.mock');

const chaiHttp = require('chai-http');
const { jwtUtil } = require('../../utils');
chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota GET /customer/products', () => {
  after(()=>{
    (products.findAll).restore();
  })

  it('retorna produtos', async () => {
    (jwtUtil.readToken).restore();
    sinon.stub(jwtUtil, 'readToken').resolves(usersList[1]);
    sinon.stub(products, "findAll").resolves(allProducts);

    chaiHttpResponse = await chai
      .request(app)
      .get('/customer/products')
      .set('authorization', tokenCustomer);
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allProducts);
  })
})