import { LANGUAGE, BETBY_TOKEN } from 'constants/index'

export const setLocalLanguage = (lang) => {
  localStorage.setItem(LANGUAGE, lang)
}

export const getLocalLanguage = () => {
  return localStorage.getItem(LANGUAGE)
}

export const setBetbyToken = (token) => {
  localStorage.setItem(BETBY_TOKEN, token)
}

export const getBetbyToken = () => {
  return localStorage.getItem(BETBY_TOKEN)
}

export const removeBetbyToken = () => {
  localStorage.removeItem(BETBY_TOKEN)
}