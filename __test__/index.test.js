import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../index';

describe('Character class', () => {
  test('should create a Bowman character with valid name and type', () => {
    const bowman = new Bowman('Legolas', 'Bowman');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should create a Swordsman character with valid name and type', () => {
    const swordsman = new Swordsman('Aragorn', 'Swordsman');
    expect(swordsman.name).toBe('Aragorn');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('should create a Magician character with valid name and type', () => {
    const magician = new Magician('Gandalf', 'Magician');
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('should create a Undead character with valid name and type', () => {
    const undead = new Undead('Valera', 'Undead');
    expect(undead.name).toBe('Valera');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('should create a Zombie character with valid name and type', () => {
    const zombie = new Zombie('Shaun', 'Zombie');
    expect(zombie.name).toBe('Shaun');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('should create a Daemon character with valid name and type', () => {
    const daemon = new Daemon('Lucifer', 'Daemon');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Bowman('L', 'Bowman')).toThrow(
      'Invalid name. Name should be a string with length between 2 and 10 characters.',
    );
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Bowman('Legolas', 'Archer')).toThrow(
      'Invalid type. Type should be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.',
    );
  });
});

describe('Methods tests', () => {
  let swordsman;

  beforeEach(() => {
    swordsman = new Swordsman('Aragorn', 'Swordsman');
  });

  test('should level up character successfully', () => {
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.health).toBe(100);
    expect(swordsman.attack).toBe(48); // 40 * 1.2
    expect(swordsman.defence).toBe(12); // 10 * 1.2
  });

  test('should not level up a dead character', () => {
    swordsman.health = 0;
    expect(() => swordsman.levelUp()).toThrow(
      'Cannot level up a dead character.',
    );
  });

  test('should damage character successfully', () => {
    swordsman.damage(20);
    expect(swordsman.health).toBeCloseTo(82);
  });

  test('should not damage a dead character', () => {
    swordsman.health = 0;
    expect(() => swordsman.damage(20)).toThrow(
      'Cannot damage a dead character.',
    );
  });
});
