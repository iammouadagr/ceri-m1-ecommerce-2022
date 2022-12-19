const app = require('../../../server');
const request = require('supertest');
const connection = require('../../../config/db')
const nock = ('nock');


describe('/albums', function() {
    it('returns status code 200, content-type = json ,if albums are returned', async () => {
        const res = await request(app).get('/api/v1/albums').send();
        expect(res.statusCode).toEqual(200);
        expect( res.headers['content-type'] ).toMatch( /json/ );
    });
});


describe('/chansons', function() {
    it('returns status code 200, content-type = json when get Chanson is called', async () => {
        const res = await request(app).get('/api/v1/chansons').send();
        console.log(res);
        expect(res.statusCode).toEqual(200);
        expect( res.headers['content-type'] ).toMatch( /json/ );
    });
});



