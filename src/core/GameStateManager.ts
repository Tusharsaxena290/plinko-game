import { GameState } from "../states/GameState";

export class GameStateManager extends Phaser.Events.EventEmitter{
    private _currentState:GameState =GameState.INTRO;

    get currentState():GameState{
        return this._currentState;
    }

    setState(newState:GameState):void{
        if(this._currentState!==newState){
            this._currentState=newState;
            this.emit("stateChanged",newState);
        }
    }
}

export const GameFSM = new GameStateManager();