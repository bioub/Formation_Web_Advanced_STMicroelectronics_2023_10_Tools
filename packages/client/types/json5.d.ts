// // config.json5.d.ts
// export interface Config {
//   baseUrlApi: string
// }
// const config: Config
// export default config

declare module "*.json5" {
  // config.json5.d.ts
  // export interface Config {
  //   baseUrlApi: string
  // }
  // const config: Config
  // export default config
  export default any;
}
