import { Link } from '@tanstack/react-router'
import PageLayout from '@/components/page-layout'

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-5xl font-semibold lowercase text-foreground">Oops! Page Not Found</h1>
        <p className="text-muted-foreground max-w-md">We're sorry, but the page you're looking for doesn't seem to exist. It might have been moved, deleted, or you might have mistyped the URL.</p>
        <Link
          to="/"
          className="rounded-md border border-border px-6 py-3 text-sm lowercase transition-colors hover:bg-accent/40"
        >
          go home
        </Link>
      </div>
    </PageLayout>
  )
} 