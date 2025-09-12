'use client'

import { UserAvatar } from 'better-auth-ui'
import { useSession } from '@/lib/auth-client'
import { Loader2 } from 'lucide-react'
import { redirect } from 'next/navigation'

export default function Home() {
  const { data: session, isPending: isLoading } = useSession()
  const user = session?.user

  if (!isLoading && !user) {
    return redirect('/auth/sign-in?redirectTo=/')
  }

  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center p-6 sm:p-10">
      {isLoading && (
        <div className="flex items-center gap-4">
          <Loader2 className="animate-spin" />
        </div>
      )}

      {!isLoading && user && (
        <div className="flex items-center gap-4">
          <UserAvatar size="lg" user={user} />
          <h1 className="text-2xl font-semibold">
            {`Welcome, ${user.name ?? "there"}!`}
          </h1>
        </div>
      )}
    </div>
  )
}
