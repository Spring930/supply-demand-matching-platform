import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <CircleIcon className="size-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-muted-foreground">
          The page you are looking for might have been removed, had its name
          changed, or not implemented yet.
        </p>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
