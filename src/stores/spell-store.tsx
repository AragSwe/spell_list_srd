import { observable, action, computed } from 'mobx'

export type TSpell = {
  name: string,
  isUsed: boolean,
  level: number,
  duration: number | null,
}

export class SpellStore {
  @observable knownSpells = [{name:'flamestrike!', level:3, duration:null, isUsed:false}] as TSpell[]

  @action
  addKnownSpell(name: string, level: number, duration: number | null) {
    this.knownSpells.push({name, level, duration, isUsed: false });
  }

  @action
  castKnownSpell(name: string) {
    var knownSpell = this.knownSpells.find(spell => spell.name === name);
    if (knownSpell)
      knownSpell.isUsed = true;
  }

  @computed
  get getUnusedSpells() {
    return this.knownSpells.filter(spell => !spell.isUsed)
  }

  @computed
  get getUsedSpells() {
    return this.knownSpells.filter(spell => spell.isUsed)
  }
}