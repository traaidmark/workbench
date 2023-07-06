export interface ConfigInterface {
  server: ServerConfigInterface;
}

export interface ServerConfigInterface {
  middleware?: any[];
  port: number;
}