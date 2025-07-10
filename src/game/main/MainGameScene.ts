import Phaser from "phaser";
import { GameFSM } from "@core/GameStateManager";
import { GameState } from "@states/GameState";
import { Peg } from "./enteties/Peg";
import { Bucket } from "./enteties/Bucket";


export class MainGameScene extends Phaser.Scene {
  constructor() {
    super("MainGameScene");
  }

  create(): void {
    const { width, height } = this.scale;

    // Background
    this.add.rectangle(width / 2, height / 2, width, height, 0x111111);

    // Game State
    GameFSM.setState(GameState.PLAYING);

    this.add.text(width / 2, 140, "Ball Drop", {
      fontSize: "28px",
      color: "#ffcc00",
    }).setOrigin(0.5);

    this.createPegGrid({
      rows: 6,
      spacing: 80,
      startY: 200,
    });

    this.createBuckets({
      count: 7,
      width: 80,
      height: 60,
      y: 680,
    });
  }

  private createPegGrid(options: { rows: number; spacing: number; startY: number }): void {
    const { width } = this.scale;
    const { rows, spacing, startY } = options;
    for (let row = 0; row < rows; row++) {
      const cols = row + 1;
      const y = startY + row * spacing;
      const totalWidth = cols * spacing;
      const startX = width / 2 - totalWidth / 2 + spacing / 2;
      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacing;
        new Peg(this, x, y); 
      }
    }
  }

  private createBuckets(options: { count: number; width: number; height: number; y: number }): void {
    const { width: screenW } = this.scale;
    const { count, width, height, y } = options;
    const startX = screenW / 2 - (count * width) / 2 + width / 2;
    for (let i = 0; i < count; i++) {
      const x = startX + i * width;
      new Bucket(this, x, y, width, height, i + 1); 
    }
  }
}
