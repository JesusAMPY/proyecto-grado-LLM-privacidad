import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {title}
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-muted-foreground text-balance">{subtitle}</p>

          {description && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}

          {(ctaLabel || secondaryCtaLabel) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:gap-6">
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
