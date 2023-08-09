import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}