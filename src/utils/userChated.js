import { useAuthStore } from '@/stores/auth.store'
import { useUserStore } from '@/stores/user.store'

export const userChated = (discussion) => {
  const me = useAuthStore().me

  if (me._id === discussion.from._id) {
    return useUserStore().getUsersById(discussion.to._id)
  }

  return useUserStore().getUsersById(discussion.from._id)
}
