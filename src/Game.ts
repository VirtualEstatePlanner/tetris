import { GameScene, LoadScene, MenuScene, GameUIScene } from './scenes'

export class Game extends Phaser.Game {
  private static instance: Game

  private constructor() {
    const config = {
      height: 1920,
      width: 1080,
      parent: 'content',
      physics: {
        arcade: {
          // debug: true,
          gravity: { y: 0 },
        },
        default: 'arcade',
      },
      pixelArt: false,
      scene: [LoadScene, MenuScene, GameScene, GameUIScene],
      type: 0,
      zoom: 1,
    }

    super(config)
  }

  public static get Instance() {
    return this.instance || (this.instance = new this())
  }
}
