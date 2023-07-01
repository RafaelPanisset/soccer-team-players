import { Team } from '../src/Team';
import { Player } from '../src/Player';

describe('Team', () => {
  it('should add players to the team', () => {
    // Arrange
    const team = new Team('Barcelona');
    const player1 = new Player('Messi', team);
    const player2 = new Player('Xavi', team);
    const player3 = new Player('Iniesta', team);

    // Act
    const players = team.getPlayers();

    // Assert
    expect(players).toHaveLength(3);
    expect(players).toContain(player1);
    expect(players).toContain(player2);
    expect(players).toContain(player3);
  });
});

