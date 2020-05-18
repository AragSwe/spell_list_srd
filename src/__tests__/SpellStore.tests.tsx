import { observable } from "mobx"
import AddSpellForm from "../components/AddSpellForm"
import { SpellStore } from "../stores/spell-store"

describe('SpellStore', () =>{
    it('Should add correct number of spells', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, null, 'spell 1');
        sut.addKnownSpell('spell 2', 1, null, 'spell 2');
        sut.addKnownSpell('spell 3', 1, null, 'spell 3');

        expect(sut.knownSpells.length).toBe(3)
    }),
    it('Should not remove spell from known list when cast', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, null, 'spell 1');
        sut.castKnownSpell(0);

        expect(sut.knownSpells.length).toBe(1);
    }),
    it('Should add spell to usedSpells list when cast', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, null, 'spell 1');
        sut.addKnownSpell('spell 2', 1, null, 'spell 2');
        sut.castKnownSpell(1);

        expect(sut.getUsedSpells.length).toBe(1);
    }),
    it('Should not add spell with duration to usedSpells list when cast before duration is reached', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, 1, 'spell 1');
        sut.addKnownSpell('spell 2', 1, 1, 'spell 2');
        sut.castKnownSpell(1);

        expect(sut.getUsedSpells.length).toBe(0);
    }),
    it('Should add spell with duration to activeSpells list when cast', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, 1, 'spell 1');
        sut.addKnownSpell('spell 2', 1, 1, 'spell 2');
        sut.castKnownSpell(1);

        expect(sut.getActiveSpells.length).toBe(1);
    }),
    it('Should add spell with duration to usedSpells list when cast and duration is reached', () => {
        const sut = new SpellStore
        sut.addKnownSpell('spell 1', 1, 1, 'spell 1');
        sut.addKnownSpell('spell 2', 1, 1, 'spell 2');

        sut.castKnownSpell(1);
        sut.countDownSpellDuration();
        
        expect(sut.getUsedSpells.length).toBe(1);
    })
})