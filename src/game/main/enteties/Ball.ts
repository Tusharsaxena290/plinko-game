import Phaser from "phaser";
export class Ball extends Phaser.Physics.Arcade.Image{
    constructor(scene:Phaser.Scene,x:number,y:number,radius:number=12){
        const key="ball";
        if(!scene.textures.exists(key)){
            const 
        }
        super(scene,x,y,undefined);
    }
}