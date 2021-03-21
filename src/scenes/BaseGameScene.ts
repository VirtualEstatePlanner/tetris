import { Scene } from 'phaser'

export class BaseGameScene extends Scene {
  protected textColor: string = '#222222'
  protected backgroundColor: number = 0xf8f8f8
  protected gameBoardColor: number = 0xeeeeee

  protected width: number = this.game.config.width as number

  protected height: number = this.game.config.height as number

  public create() {
    this.setBackground()
  }

  protected setBackground() {
    const graphics = this.add.graphics()
    graphics.fillStyle(this.backgroundColor, 1)
    graphics.fillRect(0, 0, this.width, this.height)
  }
}
