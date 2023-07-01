import { Player } from '../src/Player';

export class Team {
    private name: string;
    private players: Player[];
  
    constructor(name: string) {
      this.name = name;
      this.players = [];
    }
  
    public addPlayer(player: Player): void {
      this.players.push(player);
    }
  
    public getPlayers(): Player[] {
      return this.players;
    }
  }