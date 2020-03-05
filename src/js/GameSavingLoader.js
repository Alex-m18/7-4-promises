import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    read().then((data) => json(data)).then((value) => {
      const gameSaving = new GameSaving(value);
      return gameSaving;
    });
  }
}

export default GameSavingLoader;
