import * as express from 'express'
import { routesController } from '../controller/RouteController'

class Routes {
  public router: express.Router = express.Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get('/', (req: express.Request, res: express.Response) => routesController.root(req, res))
  }
}

export const routes = new Routes().router
