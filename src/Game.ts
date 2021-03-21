import config from './config'

export class Game extends Phaser.Game {
  static instance: Game

  constructor() {
    super(config)
  }

  public static get Instance() {
    this.instance = new this()
    return this.instance
  }
}
