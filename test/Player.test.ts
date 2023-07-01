import { Team } from '../src/Team';
import { Player } from '../src/Player';

describe('Player', () => {
  it('should associate players with the team', () => {
    // Arrange
    const team = new Team('Barcelona');
    const player1 = new Player('Messi', team);
    const player2 = new Player('Xavi', team);

    // Act
    const teamOfPlayer1 = player1.getTeam();
    const teamOfPlayer2 = player2.getTeam();

    // Assert
    expect(teamOfPlayer1).toBe(team);
    expect(teamOfPlayer2).toBe(team);
  });

  it('should return the name of the player', () => {
    // Arrange
    const team = new Team('Barcelona');
    const player = new Player('Messi', team);

    // Act
    const playerName = player.getName();

    // Assert
    expect(playerName).toBe('Messi');
  });
});
