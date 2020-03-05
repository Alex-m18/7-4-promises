import GameSavingLoader from '../GameSavingLoader';

test('should call our callback', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((saving) => {
    expect(saving).toMatchObject(expected);
  }).catch((error) => {
    throw new Error('error');
  });
});
