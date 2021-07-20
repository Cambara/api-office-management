/*
T - a schema to validate the object
J - a interface for body data
*/
export interface IValidatorProvider<T> {
  validate<J>(schema:T, params:unknown):Promise<J | string[]>
}
