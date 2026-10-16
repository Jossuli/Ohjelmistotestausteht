import { test, expect, vi } from 'vitest';
import express from 'express';
//HTTP-pyyntöjen tekemiseen testissä, joka vaati supertest asennuksen
import request from 'supertest';

//Mockattu URL, jota odotamme vastauksessa
const mockedUrl = 'https://images.dog.ceo/breeds/stbernard/n02109525_15579.jpg';

//Mockataan koko controller ennen routejen lataamista
vi.mock('../controllers/dogController', () => ({
  getDogImage: async (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        imageUrl: mockedUrl,
        status: 'success',
      },
    });
  },
}));

import dogRoutes from '../routes/dogRoutes';

//Testi GET-pyynnölle
test('GET /api/dogs/random', async () => {
    const app = express();
    app.use('/api/dogs', dogRoutes);

    const response = await request(app).get('/api/dogs/random');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.imageUrl).toContain(mockedUrl);
    });
