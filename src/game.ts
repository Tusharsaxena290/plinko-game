import { LoadingScreenScene } from "@game/loading/LoadingScreenScene";
import { MainGameScene } from "@game/main/MainGameScene";
import Phaser from "phaser";
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 720,
    height: 1280,
  },
  scene: [LoadingScreenScene, MainGameScene],
};

new Phaser.Game(config);
