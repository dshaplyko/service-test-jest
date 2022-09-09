const axios = require('axios');

describe('Books API', () => {
  it('GET /books', async () => {
    const { status, data } = await axios.get('http://localhost:3000/books');
    expect(status).toEqual(200);
    expect(data.length).toBeGreaterThan(0);
  });

  it('GET /book/:id', async () => {
    const { status, data } = await axios.get('http://localhost:3000/book/123');
    expect(status).toEqual(200);
    expect(data.id).toEqual('123');
  });

  it('CREATE: POST /book', async () => {
    await axios.post('http://localhost:3000/book', {
      id: '222',
      title: 'Title12',
    });
    const { status, data } = await axios.get('http://localhost:3000/book/222');
    expect(status).toEqual(200);
    expect(data.id).toEqual('222');
  });

  it('UPDATE: POST /book/222', async () => {
    await axios.post('http://localhost:3000/book/222', {
      id: '222',
      title: 'UPDATED_TITLE',
    });
    const { status, data } = await axios.get('http://localhost:3000/book/222');
    expect(status).toEqual(200);
    expect(data.id).toEqual('222');
    expect(data.title).toEqual('UPDATED_TITLE');
  });

  it('DELETE /book/:id', async () => {
    await axios.delete('http://localhost:3000/book/222');
    try {
      await axios.get('http://localhost:3000/book/222');
    } catch ({ response }) {
      expect(response.status).toEqual(404);
      expect(response.data).toEqual('Book not found');
    }
  });
});
