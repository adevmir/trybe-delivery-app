// import * as sinon from 'sinon';
const sinon = require('sinon');
// import * as chai from 'chai';
const chai = require('chai')

// import App from '../../api/app';
const app = require('../../api/app');
// import JwtValidation from '../utils/JwtValidation';
const { jwtUtil } = require('../../utils');

// import { Response } from 'superagent';

// import { User } from '../../database/models';
const { users } = require('../../database/models');

const { login, token, user } = require('../mocks/user.mock');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /login', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon.stub(users, "findOne").resolves({ dataValues: user });
    sinon.stub(jwtUtil, "createToken").resolves(token);
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
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body.token).to.be.equal(token);
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
    
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
  });
  
  it('não é possível fazer login com um email inválido',async () => {
    (users.findOne).restore();
    sinon.stub(users, "findOne").resolves({});
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'invalid@email.com', password: login.password });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
  });
});

