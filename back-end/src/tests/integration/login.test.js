const sinon = require('sinon');
const chai = require('chai')

const app = require('../../api/app');
const { jwtUtil } = require('../../utils');

const { users } = require('../../database/models');

const { login, tokenAdmin, user } = require('../mocks/user.mock');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /login', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon.stub(users, "findOne").resolves({ dataValues: user });
    sinon.stub(jwtUtil, "createToken").resolves(tokenAdmin);
  });
  
  after(()=>{
    (users.findOne).restore();
    (jwtUtil.createToken).restore();
  })
  
  it('é possível efetuar login corretamente', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send(login);

    const expected = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: tokenAdmin,
    }

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(expected);
  });

  it('não é possível fazer login sem email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: '', password: login.password });

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
  });

  it('não é possível fazer login sem senha', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: login.password, password: '' });

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
  });

  it('não é possível fazer login com uma senha inválida',async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: login.email, password: 'senhainvalida' });
    
    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
  });
  
  it('não é possível fazer login com um email inválido',async () => {
    (users.findOne).restore();
    sinon.stub(users, "findOne").resolves(null);
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'invalid@email.com', password: login.password });

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
  });
});

