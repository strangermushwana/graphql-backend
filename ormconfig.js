let config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/database',
    migrationsDir: 'src/migration',
  },
  cache: {
    type: 'database',
    tableName: 'query_result_cache',
  },
}

config.entities =
  process.env.NODE_ENV === 'production'
    ? [process.cwd() + '/dist/database/**/*.js']
    : ['src/database/**/*.ts']
config.ssl = process.env.NODE_ENV === 'production'
;(config.extra =
  process.env.NODE_ENV === 'production'
    ? { ssl: { rejectUnauthorized: false } }
    : null),
  (module.exports = config)
