import { Character } from "../model/character";
import { performAttack } from "../src";
import { validateCharacter } from "../src";

test("Should return false for empty name", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for life 0", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 0,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for strenght 0", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 0,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for defense 0", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 300,
        defense: 0,
    });

    expect(result).toBe(false);
});

test("Should return false for life or strenght or defense < 0", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: -10,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});

test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(true);
});

// Mock da função validateCharacter com sucesso
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return true
//     });
// });

// Mock da função validateCharacter com erro no retorno
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return false
//     });
// });

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });