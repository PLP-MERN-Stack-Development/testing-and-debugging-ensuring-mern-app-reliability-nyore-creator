import auth from '../../src/middleware/auth.js';

describe('auth middleware', () => {
  it('returns 401 if no token provided', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('calls next if token exists', () => {
    const req = { headers: { authorization: 'Bearer 123' } };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
