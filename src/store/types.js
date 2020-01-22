/**
 * Keeps an index of all the "types" of functions of the store
 * (Getters, Actions, Mutations --internal/external)
 *
 * TODO: it may be smart to granulate this file (either by type or by context)
 */

// GETTERS
export const getElement = 'getElement'
export const getComponent = 'getComponent'

// ACTIONS
export const actLayoutLoad = 'actLayoutLoad'
export const actLayoutClean = 'actLayoutClean'

export const actElementAdd = 'actElementAdd'
export const actElementUpdate = 'actElementUpdate'
export const actElementRemove = 'actElementRemove'

// MUTATIONS
export const mutLayoutUpdate = 'mutLayoutUpdate'

export const mutElementAdd = 'mutElementAdd'
export const mutElementUpdate = 'mutElementUpdate'
export const mutElementRemove = 'mutElementRemove'

const types = {
  // GETTERS
  getElement,
  getComponent,

  // ACTIONS
  actLayoutLoad,
  actLayoutClean,

  actElementAdd,
  actElementUpdate,
  actElementRemove,

  // MUTATIONS
  mutLayoutUpdate,
  mutElementAdd,
  mutElementUpdate,
  mutElementRemove
}

export default types
