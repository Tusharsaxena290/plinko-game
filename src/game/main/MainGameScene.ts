import Phaser from "phaser";
import { GameFSM } from "@core/GameStateManager";
import { GameState } from "@states/GameState";

export class MainGameScene extends Phaser.Scene {
  constructor() {
    super("MainGameScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(width / 2, height / 2, width, height, 0x111111);

    // Set FSM
    GameFSM.setState(GameState.PLAYING);

    // Configurable grid
    const rows = 6;
    const pegSpacing = 80;
    const pegRadius = 10;
    const startY = 200;

    for (let row = 0; row < rows; row++) {
      const cols = row + 1;
      const y = startY + row * pegSpacing;
      const totalWidth = cols * pegSpacing;
      const startX = width / 2 - totalWidth / 2 + pegSpacing/2;

      for (let col = 0; col < cols; col++) {
        const x = startX + col * pegSpacing;

        this.add.circle(x, y, pegRadius, 0xffffff);
      }
    }

    // Buckets at bottom
    const bucketCount = rows + 1;
    const bucketWidth = pegSpacing;
    const bucketHeight = 60;
    const bucketY = startY + rows * pegSpacing + 40;
    const startBucketX = width / 2 - (bucketCount * bucketWidth) / 2 + bucketWidth / 2;

    for (let i = 0; i < bucketCount; i++) {
      const x = startBucketX + i * bucketWidth;
      this.add.rectangle(x, bucketY, bucketWidth - 4, bucketHeight, 0x222222).setStrokeStyle(1, 0xffffff);

      this.add.text(x, bucketY, `${i + 1}x`, {
        fontSize: "20px",
        color: "#ffffff",
      }).setOrigin(0.5);
    }

    // Ball Drop Label
    this.add.text(width / 2, startY - 60, "Ball Drop", {
      fontSize: "28px",
      color: "#ffcc00",
    }).setOrigin(0.5);
  }
}
