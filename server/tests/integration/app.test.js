import request from 'supertest';
import app from '../../src/app.js';

describe('API Integration Tests', () => {
  it('should return 200 for GET /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
