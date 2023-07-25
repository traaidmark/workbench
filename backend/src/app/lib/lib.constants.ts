// CONSTANT: APP PROVIDER TYPES

export enum AppProviderType {
  Config = 'app.provider.config',
  Core = 'app.provider.core',
  Source = 'app.provider.source',
  Transport = 'app.provider.transport',
  Controller = 'app.provider.controller',
  Service = 'app.provider.service',
}

// CONSTANT: SYSTEM ERROR MESSAGES

export const AppSystemError = {
  noProviders: 'You did not load any valid providers.',
  noControllers: 'You need at least one Controller provider.',
  noTransport: 'You need at least one Transport provider.',
}