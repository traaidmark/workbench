export interface DatabaseProviderInterface {
  getConnection(): Function;
  getRepository(): Function;
}