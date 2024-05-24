import Cookies from 'universal-cookie'
import { localStorageKeys } from '../utils/common.Data'

const cookies = new Cookies()

// 24 hour * 60 minutes of every hour
const COOKIE_EXPIRE_MIN = 24 * 60

export const getAuthToken = () => {
  return cookies.get(localStorageKeys?.TOKEN)
}

export const setAuthToken = (authAccessToken) => {
  cookies.set(localStorageKeys?.TOKEN, authAccessToken, {
    path: '/',
    expires: new Date((Date.now() + COOKIE_EXPIRE_MIN * 60 * 1000)),
    sameSite: true
  })
}

export const removeAuthToken = () => {
  cookies.remove(localStorageKeys?.TOKEN, { path: '/' })
  
}

export const signIn = ({ token }) => {
  setAuthToken(token)
}

export const signOut = () => {
  removeAuthToken()
}
