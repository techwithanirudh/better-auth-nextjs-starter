import LogoMark from "@/components/logos/mark"

const APP_NAME = "Next.js Starter"
const APP_DEFAULT_TITLE = "Next.js Starter"
const APP_TITLE_TEMPLATE = "%s | Next.js Starter"
const APP_DESCRIPTION =
  "A minimal Next.js starter with Tailwind CSS and shadcn/ui."

const logo = (
  <>
    <LogoMark className="size-6" fill="currentColor" />
  </>
)

export {
  APP_NAME,
  APP_DEFAULT_TITLE,
  APP_TITLE_TEMPLATE,
  APP_DESCRIPTION,
  logo,
}
