import React from 'react'
import { SpellStore } from './spell-store'
import { CharacterStore } from './character-store';
import { UserStore } from './user-store';

export const storesContext = React.createContext({
  spellStore: new SpellStore(),
  characterStore: new CharacterStore(),
  userStore: new UserStore(),
});