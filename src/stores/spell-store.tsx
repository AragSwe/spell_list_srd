import { observable, action, computed } from 'mobx'

export type TSpell = {
  id:number,
  name: string,
  isUsed: boolean, 
  level: number,
  duration: number | null,
  maxDuration: number | null,
  description: string
}

export class SpellStore {
  @observable knownSpells = [
    {
      id: 0,
      name:'Flamestrike!',
      level:3,
      duration:null,
      isUsed:false,
      maxDuration: null,
      description: "Deals MASSIVE damage to all enemies in a 10x10 feet cylinder."
    },
    {
      id: 1,
      name:'Buff allies!',
      level:10,
      duration:5,
      isUsed:false,
      maxDuration: 5,
      description: "Give allies +5atk and +5dmg."
    }] as TSpell[]

  @action
  addKnownSpell(name: string, level: number, duration: number | null, description:string) {
    this.knownSpells.push({
      id: this.knownSpells.length,
      name,
      level,
      duration: duration,
      isUsed: false,
      maxDuration: duration,
      description: description
    });
  }

  @action
  castKnownSpell(id: number) {
    var knownSpell = this.knownSpells.find(spell => spell.id === id);
    if (knownSpell) {
      knownSpell.isUsed = true;
      knownSpell.duration = knownSpell.maxDuration;
    }
  }

  @action
  refreshSpells() {
    this.knownSpells.forEach(s => {s.isUsed = false; s.duration = s.maxDuration });
  }

  @action
  countDownSpellDuration() {
    const activeSpells = this.getActiveSpells;
    activeSpells.forEach(spell => spell.duration && spell.duration--);
  }

  @action
  abortActiveSpells() {
    const activeSpells = this.getActiveSpells;
    activeSpells.forEach(spell => spell.duration = (spell.duration && 0) || null);
  }

  @computed
  get getUnusedSpells() {
    return this.knownSpells.filter(spell => !spell.isUsed)
  }

  @computed
  get getUsedSpells() {
    return this.knownSpells.filter(spell => spell.isUsed && (!spell.duration || spell.duration === 0))
  }

  @computed
  get getActiveSpells() {
    return this.knownSpells.filter(spell => spell.isUsed && (spell.duration ?? 0) > 0)
  }
}