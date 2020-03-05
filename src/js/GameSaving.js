class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.id,
      name: data.name,
      level: data.level,
      points: data.points,
    };
  }
}

export default GameSaving;
