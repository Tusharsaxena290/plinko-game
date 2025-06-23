import Phaser from "phaser";

export class Peg extends Phaser.GameObjects.Arc{
    constructor(scene:Phaser.Scene,x:number,y:number,radius:number=10, color:number = 0xffffff){
        super(scene,x,y,radius,0,360,false);
        this.setFillStyle(color);
        scene.add.existing(this);
    }
}