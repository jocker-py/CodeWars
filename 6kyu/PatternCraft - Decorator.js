/*
link: https://www.codewars.com/kata/5682e545fb263ecf7b000069

The Decorator Design Pattern can be used, for example,
in the StarCraft game to manage upgrades.

The pattern consists in "incrementing" your base class
with extra functionality.

A decorator will receive an instance of the base class
and use it to create a new instance with the new things
you want "added on it".

Your Task
Complete the code so that when a Marine gets a WeaponUpgrade
 it increases the damage by 1, and if it is a ArmorUpgrade
 then increase the armor by 1.

You have 3 classes:

Marine: has a damage and an armor properties
MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply
on marine. Accepts a Marine in the constructor and has the
same properties as the Marine

Resouces
PatternCraft > Decorator
SourceMaking > Decorator
Wikipedia > Decorator
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection
 of Youtube videos that explains some of the design patterns and how
 they are used (or could be) on StarCraft.
*/

class Marine {
  constructor(_damage, _armor) {
    this._damage = _damage;
    this._armor = _armor;
  }

  get damage() { return this._damage }
  set damage(value) { this._damage = value }

  get armor() { return this._armor}
  set armor(value) { this._armor = value}
}

class MarineWeaponUpgrade extends Marine {
  constructor(marine) {
    super(marine._damage, marine.armor);
    this._damage = marine._damage + 1;
    this._armor = marine._armor;
  }

  get damage() { return this._damage; }
  set damage(value) { this._damage = value}

  get armor() { return this._armor}
  set armor(value) { this._damage = value}
}

class MarineArmorUpgrade extends Marine {
  constructor(marine) {
    super(marine._damage, marine._armor)
    this._damage = marine._damage;
    this._armor = marine._armor + 1;
  }

  get damage() { return this._damage}
  set damage(value) { this._damage = value }

  get armor() { return this._armor}
  set armor(value) { this._armor = value }
}