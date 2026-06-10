import { gcd } from './gcd';

export class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number = 1) {
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero.');
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.simplify();
  }

  simplify() {
    const divisor = gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / divisor;
    this.denominator = this.denominator / divisor;
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  add(other: Fraction): Fraction {
    return new Fraction(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  subtract(other: Fraction): Fraction {
    return new Fraction(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  multiply(other: Fraction): Fraction {
    return new Fraction(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  divide(other: Fraction): Fraction {
    if (other.numerator === 0) {
      throw new Error('Cannot divide by zero fraction.');
    }
    return new Fraction(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  toTex(): string {
    if (this.denominator === 1) {
      return `${this.numerator}`;
    }
    return `\\frac{${this.numerator}}{${this.denominator}}`;
  }

  toString(): string {
    if (this.denominator === 1) {
      return `${this.numerator}`;
    }
    return `${this.numerator}/${this.denominator}`;
  }
}
