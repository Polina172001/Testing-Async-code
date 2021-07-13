import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const buffer = new ArrayBuffer(data.length * 2);
const bufferView = new Uint16Array(buffer);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  bufferView[i] = data.charCodeAt(i);
}

jest.mock = ('../reader.js');

test('check function read', async () => {
  read.mockValue(buffer);
  const saving = await GameSavingLoader.load();
  await expect(saving).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
test('check error function read', async () => {
  expect.assertions(1);
  read.mockValue(buffer);
  const saving = await GameSavingLoader.load();
  await expect(saving).toThrow('error');
});
