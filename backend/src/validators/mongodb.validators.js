// doubtful code REVIEW LATER and test

import { z } from "zod";

/**
 * @param {string} idName
 * @description A common validator responsible to validate mongodb ids passed in the url's path variable
 */
export const mongoIdPathVariableSchema = () => {
  return z.string().regex(/^[0-9a-fA-F]{24}$/, `Invalid id`)
}


/**
 * @param {string} idName
 * @description A common validator responsible to validate mongodb ids passed in the request body
 */
export const mongoIdRequestBodyValidator = (idName) => {
  return z.object({
    [idName]: z.string().min(1).refine((value) => z.string().uuid('4').safeParse(value).success, `Invalid ${idName}`),
  });
};
