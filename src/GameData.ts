import { Game } from './Game'

class GameData {
  public readonly gamePointsChangedEvent = 'GamePointsChangedEvent'
  public readonly gameStartChangedEvent = 'GameStartChangedEvent'

  private static instance: GameData

  private constructor() {}

  public static get Instance() {
    return this.instance || (this.instance = new this())
  }

  public readonly tileSize = 32
  public readonly boardWidthTileMultiplier = 10

  private _gamePoints: number = 0
  get gamePoints() {
    return this._gamePoints
  }
  set gamePoints(val) {
    this._gamePoints = val
    Game.Instance.events.emit(this.gamePointsChangedEvent)
  }

  private _startTime: Date = new Date()
  get startTime() {
    return this._startTime
  }
  set startTime(val: Date) {
    this._startTime = val
    Game.Instance.events.emit(this.gameStartChangedEvent)
  }
}

export default GameData.Instance
