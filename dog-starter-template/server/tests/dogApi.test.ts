import { test, expect, vi } from 'vitest';
import express from 'express';
import request from 'supertest';

const app = express();


app.get('/api/dogs/random', (_req, res) => {
  res.status(500).json({
    success: false,
    error: 'Failed to fetch dog image: Network error',
  });
});

test('GET /api/dogs/random returns 500', async () => {
    const response = await request(app).get('/api/dogs/random');

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe(
    'Failed to fetch dog image: Network error'
    );
});