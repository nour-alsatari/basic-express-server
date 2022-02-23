'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing API server',()=>{

    it('testing 404 on a bad route',async()=>{
        const response = await request.get('/notexistent');
        // console.log(response);
        expect(response.status).toEqual(404);
        // expect(response.status).toEqual(200);
    })

    it('testing 404 on a bad method', async()=>{
        const response = await request.post('/person');
        expect(response.status).toEqual(404)
    })

})