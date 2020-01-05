import React from 'react'
import { storesContext } from '../stores/stores-context'

export const useStores = () => React.useContext(storesContext);