import { Team } from './Team';

export class Player {
  private name: string;
  private team: Team;

  constructor(name: string, team: Team) {
    this.name = name;
    this.team = team;
    this.team.addPlayer(this);
  }

  public getTeam(): Team {
    return this.team;
  }

  public getName(): string {
    return this.name;
  }
}