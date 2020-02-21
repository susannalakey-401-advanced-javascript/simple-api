const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/app');
const mockRequest = supergoose(server);


describe('the server', () => {
  let newProduct;

  beforeEach(() => {
    newProduct = {
      category: 'shoes',
      name: 'nike',
    };
  });

  it('can create a new product', () => {
    return mockRequest
      .post('/products')
      .send(newProduct)
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body.category).toEqual('shoes');
        expect(results.body.name).toEqual('nike');
      });
  });

  it('can get a list of all the products', () => {
    return mockRequest
      .get('/products')
      .send(newProduct)
      .then(results => {
        expect(results.status).toBe(200);
      });
  });


  // it('can update a single product entry', async () => {
  //   const updateEntry = {
  //     category: 'fruit',
  //     name: 'banana',
  //     id: '2',
  //   };

  //   return await mockRequest
  //     .put('/products/:id')
  //     .send(updateEntry)
  //     .then(results => {
  //       console.log('results', results)
  //       expect(results.status).toBe(200);

  //     });
  // });

  // it('deletes an entry when making a DELETE request to /products/:id', async () => {
  //   return await mockRequest
  //     .delete('/products/1')
  //     .then(results => {
  //       expect(results.status).toBe(202);
  //     });
  // });






  // test error handlers

});
