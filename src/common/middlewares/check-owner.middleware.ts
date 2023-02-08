import { MiddlewareInterface } from '../../types/middleware.interface.js';
import { NextFunction, Request, Response } from 'express';
import { CheckOwnerInterface } from '../../types/check-owner.interface.js';
import HttpError from '../errors/http-error.js';
import { StatusCodes } from 'http-status-codes';

export class CheckOwnerMiddleware implements MiddlewareInterface {
  constructor(
    private readonly service: CheckOwnerInterface,
    // private readonly entityName: string,
    private readonly paramName: string,
  ) {}

  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const userId = req.user.id;
    const documentId = req.params[this.paramName];
    //const res = await this.service.isOwner(userId, documentId);
    // console.log(documentId);
    // throw new HttpError(
    //   StatusCodes.FORBIDDEN,
    //   `${res}`,
    //   'CheckOwnerMiddleware'
    // );
    if (!await this.service.isOwner(userId, documentId)) {
      throw new HttpError(
        StatusCodes.FORBIDDEN,
        `You have not permision for this action.`,
        'CheckOwnerMiddleware'
      );
    }

    next();
  }
}
