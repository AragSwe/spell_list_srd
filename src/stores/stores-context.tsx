import React from 'react'
import { SpellStore } from './spell-store'

export const storesContext = React.createContext({
  spellStore: new SpellStore()
});