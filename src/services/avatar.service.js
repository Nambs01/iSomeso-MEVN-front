import { iSomesoApi } from './API.service'

export const getAvatar = async (id) => {
  let avatar = null
  await iSomesoApi
    .get('/users/' + id + '/avatar')
    .then((response) => {
      avatar = response.data.avatar
    })
    .catch(() => {
      avatar = ''
    })
  return avatar
}
