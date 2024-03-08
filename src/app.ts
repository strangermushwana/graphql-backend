import bodyParser from 'body-parser'
import cors from 'cors'
import * as fs from 'fs'
import express from 'express'
import { routes } from './routes/Routes'
import { createConnection } from 'typeorm'
import { ApolloServer, gql } from 'apollo-server-express'
import path from 'path'
import resolvers from './resolvers'

class App {
  public app: express.Express
  private GRAPH_PATH = '/api/graphql'
  private REST_PATH = '/api/rest'
  private typeDefs = fs.readFileSync(path.join(__dirname, '../src/schema/schema.graphql'))

  constructor() {
    this.app = express()
    this._configureCORS()
    this._configurePostgres()
    this._configureRoutes()
    this._configureGraph()
  }

  private _configureCORS(): void {
    this.app.use(cors())
  }

  private _configureRoutes(): void {
    this.app.use(bodyParser.json({ limit: '10mb' }))
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(this.REST_PATH, routes)
  } 

  private _configurePostgres(): void {
    createConnection().then(() => console.log())
      .catch((err) => {
        console.log('error connecting database')
        console.log(err)
      })
  }

  private _configureGraph(): void {
    const server = new ApolloServer({
      typeDefs: gql(`${this.typeDefs}`),
      resolvers,
    })
    server.start().then(() => {
      server.applyMiddleware({
        app: this.app,
        path: this.GRAPH_PATH,
      })
    })
  }
}

export default new App().app