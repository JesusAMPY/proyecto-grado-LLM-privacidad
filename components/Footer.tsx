'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-primary mb-4">LLM Privacy Framework</h3>
            <p className="text-sm text-muted-foreground">
              Educational resource for privacy risk assessment in Colombian Higher Education Institutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/framework" className="text-muted-foreground hover:text-foreground transition-colors">
                  Framework
                </Link>
              </li>
              <li>
                <Link href="/privacy-risks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Risks
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/scenarios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Scenarios
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  References
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 LLM Privacy Framework. Educational resource for Colombian Higher Education Institutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
