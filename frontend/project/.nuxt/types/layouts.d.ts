import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "users"
declare module "/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}