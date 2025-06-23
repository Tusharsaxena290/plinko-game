import Phaser from "phaser";
// import { EventBus } from "@core/EventBus"; // for future use

export class LoadingScreenScene extends Phaser.Scene {
  constructor() {
    super("LoadingScreenScene");
  }

  create() {
    const { width, height } = this.scale;

    // Background
    this.add.rectangle(width / 2, height / 2, width, height, 0x0d0d0d);

    // Title
    this.add.text(width / 2, height / 2 - 200, "Plinko", {
      fontSize: "64px",
      color: "#ffffff",
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 - 120, "Let the ball drop and multiply your luck!", {
      fontSize: "24px",
      color: "#aaaaaa",
      wordWrap: { width: width * 0.8 },
      align: "center",
    }).setOrigin(0.5);

    const btnWidth = 280;
    const btnHeight = 80;
    const buttonBg = this.add.rectangle(width / 2, height / 2 + 100, btnWidth, btnHeight, 0x222222)
      .setStrokeStyle(2, 0xffffff)
      .setInteractive({ useHandCursor: true });

    const buttonText = this.add.text(width / 2, height / 2 + 100, "Start Game", {
      fontSize: "28px",
      color: "#ffffff",
    }).setOrigin(0.5);

    buttonBg.on("pointerdown", () => {
      console.log("Start Game Clicked");
      this.scene.start("MainGameScene");
    });
  }
}
