import { nodeEnv } from '../configs/env.configs';

/**
 * Handle errors.
 * @access Public
 */
export const errorHandler = (err : any, req : any, res : any, next : any) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    success: false,
    message: err.message,
    stack: nodeEnv === 'production' ? null : err.stack,
  });
};
