import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const apps = [
  {
    href: '/unraid',
    name: 'Unraid',
    description: 'Tips and tricks for using Unraid.',
  },
  {
    href: '/nginx-proxy-manager',
    name: 'Nginx Proxy Manager',
    description: 'Useful knowledge about NPM.',
  },
  {
    href: '/authelia',
    name: 'Authelia',
    description: 'Get up and running with Authelia.',
  },
]

export function Apps() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="apps">
        Apps
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {apps.map((app) => (
          <div key={app.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {app.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {app.description}
            </p>
            <p className="mt-4">
              <Button href={app.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
