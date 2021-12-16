// make file a module to allow augmentations instead of declarations such as in shims
export {};

declare module 'vue-router' {
  interface RouteMeta {
    reqAuth: boolean;
  }
}