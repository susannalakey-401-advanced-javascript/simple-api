const supergoose = require('@code-fellows/supergoose');
const { server } = require('../src/app');

const ProductSchema = require('../src/models/products-schema.js');


describe('the server', () => {
  let mockRequest;


  beforeEach(() => {
    mockRequest = supergoose(server);
  });

  it('handles a 404 error', () => {
    return mockRequest
      .get('/fakeroute')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });


  // describe('when database connectivity is broken', () => {
  //   let findSpy;
  //   beforeEach(() => {
  //     // mockImplementatino is replacing finds typical implementation with an error
  //     findSpy = jest.spyOn(ProductSchema, 'find').mockImplementation(() => {
  //       throw 'ERROR';
  //     });
  //   });


  //   afterEach(() => {
  //     // this restores the find function to it's normal implementation
  //     findSpy.mockRestore();
  //   });

  //   it('handles a 500 error', () => {
  //     return mockRequest
  //       .get('/products')
  //       .send()
  //       .then(results => {
  //         expect(results.status).toBe(500);
  //       });
  //   });
  // });



  describe('products routes', () => {
    let newProduct;


    beforeEach(() => {
      newProduct = {
        category: 'shoes',
        name: 'nike',
        id: '5e51d82b5cbbefa0f83fa96c',
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
        .send()
        .then(results => {
          expect(results.status).toBe(200);
        });
    });

    it('can get a list of one entry', async () => {
      await mockRequest
        .post('/products/5e51d82b5cbbefa0f83fa96c')
        .send(newProduct);
      return mockRequest
        .get('/products')
        .send()
        .then(results => {
          expect(results.status).toBe(200);
        });
    });

    it('can update a single product entry', () => {
      const updateEntry = {
        category: 'fruit',
        name: 'banana',
        id: '5e51d82b5cbbefa0f83fa96c',
      };

      return mockRequest
        .put(`/products/${updateEntry.id}`)
        .send(updateEntry)
        .then(results => {
          expect(results.status).toBe(200);
        });
    });

    it('deletes an entry when making a DELETE request to /products/:id', async () => {
      await mockRequest
        .post('/products')
        .send(newProduct);
      await mockRequest
        .delete('/products/5e51d82b5cbbefa0f83fa96c')
        .then(results => {
          expect(results.status).toBe(204);
        });
    });



    describe('categories routes', () => {

      let newCategory;
      let mockRequest;

      beforeEach(() => {
        newCategory = {
          name: 'Susanna',
          display_name: 'slakey',
          id: '5e51d82b5cbbefa0f83fa96c',
        };
        mockRequest = supergoose(server);
      });

      it('can create a new category', () => {
        return mockRequest
          .post('/categories')
          .send(newCategory)
          .then(results => {
            expect(results.status).toBe(201);
            expect(results.body.name).toEqual('Susanna');
            expect(results.body.display_name).toEqual('slakey');
          });
      });

      it('can get a list of all the categories', () => {
        return mockRequest
          .get('/categories')
          .send()
          .then(results => {
            expect(results.status).toBe(200);
          });
      });

      it('can get a list of one entry', async () => {
        await mockRequest
          .post('/categories/5e51d82b5cbbefa0f83fa96c')
          .send(newCategory);
        return mockRequest
          .get('/categories')
          .send()
          .then(results => {
            expect(results.status).toBe(200);
          });
      });

      it('can update a single category entry', async () => {
        const updateEntry = {
          name: 'Abby',
          display_name: 'abbyyyy',
          id: '5e51d82b5cbbefa0f83fa96c',
        };

        return mockRequest
          .put(`/categories/${updateEntry.id}`)
          .send(updateEntry)
          .then(results => {
            expect(results.status).toBe(200);
          });
      });

      it('deletes an entry when making a DELETE request to /categories/:id', async () => {
        await mockRequest
          .post('/categories')
          .send(newCategory);
        return mockRequest
          .delete('/categories/5e51d82b5cbbefa0f83fa96c')
          .then(results => {
            expect(results.status).toBe(204);
          });
      });
    });
  });
});
