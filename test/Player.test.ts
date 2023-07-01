import { Team } from '../src/Team';
import { Player } from '../src/Player';

describe('Player', () => {
  it('should associate players with the team', () => {
    // Arrange
    const team = new Team('Flamengo');
    const player1 = new Player('Pedro', team);
    const player2 = new Player('Gabriel', team);

    // Act
    const teamOfPlayer1 = player1.getTeam();
    const teamOfPlayer2 = player2.getTeam();

    // Assert
    expect(teamOfPlayer1).toBe(team);
    expect(teamOfPlayer2).toBe(team);
  });

  it('should return the name of the player', () => {
    // Arrange
    const team = new Team('Flamengo');
    const player = new Player('Gabriel', team);

    // Act
    const playerName = player.getName();

    // Assert
    expect(playerName).toBe('Gabriel');
  });
});
