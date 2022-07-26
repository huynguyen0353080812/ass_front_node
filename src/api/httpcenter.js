import instance from './congfig'
export const getdata = (url) => {
  return instance.get(url)
}
export const Signin = (user) => {
  return instance.post('/signin', user)
}
export const signup = (user) => {
  return instance.post('/signup', user)
}
export const Delete = (id) => {
  return instance.delete(id)
}
export const Update = (pathUrl, user) => {
  return instance.patch(pathUrl, user)
}
export const InsertData = (pathUrl, user) => {
  return instance.post(pathUrl, user)
}
