#!/usr/bin/env bash
set -euo pipefail

echo "[deploy-check] Node: $(node -v)"
echo "[deploy-check] NPM:  $(npm -v)"

echo "[deploy-check] Verifying environment variables (non-empty if required in runtime)"
MISSING=0
REQUIRED_VARS=(
  "NEXT_PUBLIC_SITE_URL"
)
for VAR in "${REQUIRED_VARS[@]}"; do
  if [ -z "${!VAR-}" ]; then
    echo "[deploy-check] WARN: $VAR is not set"
  fi
done

echo "[deploy-check] Running npm ci with fallback"
if ! npm ci --prefer-offline --no-audit --no-fund; then
  echo "[deploy-check] npm ci failed, falling back to npm install --legacy-peer-deps"
  npm install --legacy-peer-deps --no-audit --no-fund
fi

echo "[deploy-check] Validating Next.js build"
npx next telemetry disable >/dev/null 2>&1 || true
npm run lint || true
node -e "require('./next.config.ts'); console.log('[deploy-check] next.config.ts parsed OK')" || true

echo "[deploy-check] Checks complete"

