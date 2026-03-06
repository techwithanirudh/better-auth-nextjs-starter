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
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthUIProvider
        authClient={authClient}
        navigate={(href) => {
          router.push(href as Parameters<typeof router.push>[0])
        }}
        replace={(href) => {
          router.replace(href as Parameters<typeof router.replace>[0])
        }}
        onSessionChange={() => {
          router.refresh()
        }}
        Link={({ href, className, children }) => (
          <NextLink
            href={href as ComponentProps<typeof NextLink>["href"]}
            className={className}
          >
            {children}
          </NextLink>
        )}
      >
        <ProgressProvider
          height="2px"
          color="var(--color-primary)"
          options={{
            showSpinner: false,
          }}
          stopDelay={1000}
          delay={1000}
          startOnLoad
          shallowRouting
        >
          {children}
          <Toaster />
          <TailwindIndicator />
        </ProgressProvider>
      </AuthUIProvider>
    </ThemeProvider>
  )
}
