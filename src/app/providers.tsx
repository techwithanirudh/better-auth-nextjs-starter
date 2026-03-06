'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { AuthUIProvider } from 'better-auth-ui'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import type { ComponentProps, ReactNode } from 'react'
import { Toaster } from 'sonner'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { authClient } from '@/lib/auth-client'

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
      enableSystem
    >
      <AuthUIProvider
        authClient={authClient}
        Link={({ href, className, children }) => (
          <NextLink
            className={className}
            href={href as ComponentProps<typeof NextLink>['href']}
          >
            {children}
          </NextLink>
        )}
        navigate={(href) => {
          router.push(href as Parameters<typeof router.push>[0])
        }}
        onSessionChange={() => {
          router.refresh()
        }}
        replace={(href) => {
          router.replace(href as Parameters<typeof router.replace>[0])
        }}
      >
        <ProgressProvider
          color='var(--color-primary)'
          delay={1000}
          height='2px'
          options={{
            showSpinner: false,
          }}
          shallowRouting
          startOnLoad
          stopDelay={1000}
        >
          {children}
          <Toaster />
          <TailwindIndicator />
        </ProgressProvider>
      </AuthUIProvider>
    </ThemeProvider>
  )
}
