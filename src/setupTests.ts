import { createRequire } from 'node:module';
import { vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

const require = createRequire(import.meta.url);

globalThis.jest = vi as unknown as typeof jest;
require('jest-canvas-mock');
