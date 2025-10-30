#!/usr/bin/env bash
set -euo pipefail

echo "[preinstall] Starting safe preinstall"

# If node_modules exists but lockfile changed or is inconsistent, clean it
if [ -d node_modules ]; then
  if [ -f package-lock.json ]; then
    echo "[preinstall] Checking lockfile integrity"
    if ! npm ls >/dev/null 2>&1; then
      echo "[preinstall] Detected dependency tree issues. Removing node_modules"
      rm -rf node_modules
    fi
  else
    echo "[preinstall] No lockfile found. Removing node_modules"
    rm -rf node_modules
  fi
fi

echo "[preinstall] Done"

