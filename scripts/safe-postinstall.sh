#!/usr/bin/env bash
set -euo pipefail

echo "[postinstall] Running dedupe and audit fixes if needed"

# Try to dedupe to minimize bundle size
npm dedupe || true

# If peer dep issues persist, advise but don't fail
if ! npm ls >/dev/null 2>&1; then
  echo "[postinstall] Detected issues in dependency tree. Consider running: npm install --legacy-peer-deps"
fi

echo "[postinstall] Complete"

