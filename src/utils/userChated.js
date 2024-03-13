import { useAuthStore } from '@/stores/auth.store'

export const userChated = (discussion) => {
  const me = useAuthStore().me
  if (me._id === discussion.from._id) return discussion.to

  return discussion.from
}
