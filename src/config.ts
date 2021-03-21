import Phaser from 'phaser'
import { GameScene } from './scenes/GameScene'
import { GameUIScene } from './scenes/GameUIScene'
import { LoadScene } from './scenes/LoadScene'
import { MenuScene } from './scenes/MenuScene'

const config: Phaser.Types.Core.GameConfig = {
  height: 720,
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
