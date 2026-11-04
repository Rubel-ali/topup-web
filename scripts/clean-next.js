const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');
try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('[predev] Cleaned stale .next cache to ensure clean dev compilation.');
  }
} catch (e) {
  // Ignore locking if files are busy
}

