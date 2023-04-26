import { useState } from 'react'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export function BasicAuth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const hash = btoa(`${username}:${password}`)
  const output = `proxy_set_header Authorization "Basic ${hash}";`
  return (
    <div>
      <div className="grid            grid-cols-2">
        <div>
      <input
        className="h-8 w-full items-center gap-2 rounded-l-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div><div>
      <input
        className="h-8 w-full items-center gap-2 rounded-r-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      </div></div>
      <div class="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
        <div class="group dark:bg-white/2.5">
          <div class="relative">
            <pre class="overflow-x-auto p-4 text-xs text-white">
              <code>{output}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
