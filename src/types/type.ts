import { Request as ExpressReq } from "express";

interface ModRequest extends ExpressReq {
  user?: any;
}

export interface Request<T = any> extends ModRequest {
  body: T;
}

export type ErrorType = {
  status: number;
  message: string;
};
