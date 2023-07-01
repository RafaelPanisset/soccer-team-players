import { Team } from '../src/Team';
import { Player } from '../src/Player';

describe('Team', () => {
  it('should add players to the team', () => {
    // Arrange
    const team = new Team('Flamengo');
    const player1 = new Player('Arrascaeta', team);
    const player2 = new Player('Gerson', team);
    const player3 = new Player('Ayrton Lucas', team);

    // Act
    const players = team.getPlayers();

    // Assert
    expect(players).toHaveLength(3);
    expect(players).toContain(player1);
    expect(players).toContain(player2);
    expect(players).toContain(player3);
  });
});

