import { Request, Response } from 'express'

export class RouteController {

  public root(req: Request, res: Response) {
    res.status(200).send({
      message: 'Route is up and running',
    })
  }
}

export const routesController = new RouteController()
