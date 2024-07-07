import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import events from 'events';

events.EventEmitter.defaultMaxListeners = 20;

export default defineConfig({
  plugins: [react()],
});
