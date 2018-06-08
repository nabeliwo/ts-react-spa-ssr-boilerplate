export const env = process.env.NODE_ENV || 'development'
export const isDevelopment = env === 'development'
export const isTest = env === 'test'
export const isStaging = env === 'staging'
export const isProduction = env === 'production'
export const isServer = typeof document === 'undefined'
export const isClient = !isServer
