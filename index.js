export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error(
        'Invalid name. Name should be a string with length between 2 and 10 characters.',
      );
    }

    const validTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!validTypes.includes(type)) {
      throw new Error(
        'Invalid type. Type should be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.',
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character.');
    }

    this.level += 1;
    this.health = 100;

    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Cannot damage a dead character.');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type, 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type, 40, 10);
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type, 10, 40);
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type, 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type, 40, 10);
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type, 10, 40);
  }
}
