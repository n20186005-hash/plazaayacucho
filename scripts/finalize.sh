#!/usr/bin/env bash
set -euo pipefail

corepack enable

# Primera resolución: crea pnpm-lock.yaml real si todavía no existe.
if [[ ! -f pnpm-lock.yaml ]]; then
  corepack pnpm install
fi

rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
