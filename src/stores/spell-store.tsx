import { observable, action, computed } from 'mobx'

export type TSpell = {
  name: string,
  isUsed: boolean
}

export class SpellStore {
  @observable knownSpells = [{name:'flamestrike!', isUsed:false}] as TSpell[]

  @action
  addKnownSpell(name: string) {
    this.knownSpells.push({name, isUsed: false });
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