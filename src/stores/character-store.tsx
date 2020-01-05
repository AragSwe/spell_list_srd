import { observable, action } from 'mobx'

export type TCharacter = {
  name: string,
  level: number,
  wisdomModifier: number
}

export class CharacterStore {
  @observable characterInfo = {name: "Micke", level: 3, wisdomModifier: 4} as TCharacter;

  @action
  setLevel(level: number) {
    this.characterInfo.level = level;
  }

  @action
  setWisomModifier(wisdomModifier: number) {
    this.characterInfo.wisdomModifier = wisdomModifier;
  }

  @action
  setName(name: string) {
    this.characterInfo.name = name;
  }
}