import Phaser from "phaser";

export class Bucket extends Phaser.GameObjects.Container {
  public readonly multiplier: number;
  private sceneRef: Phaser.Scene;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    multiplier: number
  ) {
    super(scene, x, y);
    this.sceneRef = scene;
    this.multiplier = multiplier;

    this.createBucket(width, height);
    this.createMultiplier();

    scene.add.existing(this); 
  }

  private createBucket(width: number, height: number): void {
    const bucket = new Phaser.GameObjects.Rectangle(this.sceneRef, 0, 0, width - 4, height, 0x222222)
      .setStrokeStyle(1, 0xffffff);

    this.add(bucket); // Add to container
  }

  private createMultiplier(): void {
    const label = new Phaser.GameObjects.Text(this.sceneRef, 0, 0, `${this.multiplier}x`, {
      fontSize: "20px",
      color: "#ffffff",
    }).setOrigin(0.5);

    this.add(label); 
  }
}
