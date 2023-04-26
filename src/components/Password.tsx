import { useMemo } from 'react'

const passwords: Record<string, string> = {}

function generatePassword(length: number): string {
  const wishlist =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')
}

export function Password({ length, id }) {
  const password = useMemo(
    function () {
      const _id = `${id}-${length}`
      if (!passwords[_id]) {
        passwords[_id] = generatePassword(length)
      }
      return passwords[_id]
    },
    [id, length]
  )
  return <span>{password}</span>
}
