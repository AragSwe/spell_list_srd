import { observable, action, computed } from 'mobx'

export type TSpell = {
  name: string,
  isUsed: boolean,
  level: number,
  duration: number | null,
  maxDuration: number | null,
}

export class SpellStore {
  @observable knownSpells = [{name:'flamestrike!', level:3, duration:null, isUsed:false, maxDuration: null}] as TSpell[]

  @action
  addKnownSpell(name: string, level: number, duration: number | null) {
    this.knownSpells.push({name, level, duration: null, isUsed: false, maxDuration: duration });
  }

  @action
  castKnownSpell(name: string) {
    var knownSpell = this.knownSpells.find(spell => spell.name === name);
    if (knownSpell) {
      knownSpell.isUsed = true;
      knownSpell.duration = knownSpell.maxDuration;
    }
  }

  @action
  refreshSpells() {
    this.knownSpells.forEach(s => s.isUsed = false);
  }

  @action
  countDownSpellDuration() {
    const activeSpells = this.getActiveSpells;
    activeSpells.forEach(spell => spell.duration && spell.duration--);
  }

  @computed
  get getUnusedSpells() {
    return this.knownSpells.filter(spell => !spell.isUsed)
  }

  @computed
  get getUsedSpells() {
    return this.knownSpells.filter(spell => spell.isUsed)
  }

  @computed
  get getActiveSpells() {
    return this.knownSpells.filter(spell => spell.isUsed && (spell.duration ?? 0) > 0)
  }
}