// export const ContainerType = {
//   Controller: Symbol.for('Controller'),
//   Repository: Symbol.for('Repository'),
// };

export enum ProviderType {
  Controller = 'provider:controller',
  Repository = 'provider:repository',
}

export const ProviderMessage = {
  errorNoProvider: 'There are no Providers available to load.',
  errorNoController: 'You need at least one valid controller provider',
}