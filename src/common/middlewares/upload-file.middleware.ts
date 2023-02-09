import { NextFunction, Request, Response } from 'express';
import { nanoid } from 'nanoid';
import multer, { diskStorage, FileFilterCallback } from 'multer';
import mime from 'mime-types';
import { MiddlewareInterface } from '../../types/middleware.interface.js';
import HttpError from '../errors/http-error.js';
import { StatusCodes } from 'http-status-codes';

export class UploadFileMiddleware implements MiddlewareInterface {
  constructor(
    private uploadDirectory: string,
    private fieldName: string,
    private availableMimetypes?: string[]
  ) {}

  public async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    const storage = diskStorage({
      destination: this.uploadDirectory,
      filename: (_req, file, callback) => {
        const extension = mime.extension(file.mimetype);
        const filename = nanoid();
        callback(null, `${filename}.${extension}`);
      },
    });

    const fileFilter = (_req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
      if (!this.availableMimetypes || this.availableMimetypes?.includes(file.mimetype)) {
        return callback(null, true);
      } else {
        callback(null, false);
        return callback(new HttpError(
          StatusCodes.BAD_REQUEST,
          `File extention must be ${this.availableMimetypes.join(', ')}.`,
          'ValidateFileMiddleware'
        ));
      }
    };

    const uploadSingleFileMiddleware = multer({storage, fileFilter})
      .single(this.fieldName);

    uploadSingleFileMiddleware(req, res, next);
  }
}
