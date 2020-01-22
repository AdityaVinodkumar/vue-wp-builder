/**
 * Keeps an index of all the "types" of functions of the store
 * (Getters, Actions, Mutations --internal/external)
 *
 * TODO: it may be smart to granulate this file (either by type or by context)
 */

export const GET_ELEMENT = 'GET_ELEMENT'
export const GET_COMPONENT = 'GET_COMPONENT'

export const SET_COMPONENTLIST = 'SET_COMPONENTLIST'

export const SET_LAYOUT = 'SET_LAYOUT'
export const CLEAN_LAYOUT = 'CLEAN_LAYOUT'

export const ADD_ELEMENT = 'ADD_ELEMENT'
export const UPDATE_ELEMENT = 'UPDATE_ELEMENT'
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT'
export const SET_CURRENTELKEY = 'SET_CURRENTELKEY'
export const SET_DRAGGINGELKEY = 'SET_DRAGGINGELKEY'
