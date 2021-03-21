import Phaser from 'phaser'
import { LoadScene, MenuScene, GameScene, GameUIScene } from './scenes'

const config: Phaser.Types.Core.GameConfig = {
  height: 640,
  width: 480,
  parent: 'content',
  physics: {
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
    default: 'arcade',
  },
  pixelArt: false,
  scene: [LoadScene, MenuScene, GameScene, GameUIScene],
  type: 0,
  zoom: 1,
}

export default config
