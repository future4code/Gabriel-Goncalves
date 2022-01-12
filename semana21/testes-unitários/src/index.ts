import { Character } from "../model/character";

export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
          input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };

  export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
// COM VALIDATOR
// Permite testar apenas a função performAttack sem depender da validateCharacter
//   export const performAttack = (
//     attacker: Character,
//     defender: Character,
//     validator: (input: Character) => boolean
//   ) => {
//     if (!validator(attacker) || !validator(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };