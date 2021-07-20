
export interface IService<T, J> {
  execute(dto:T):Promise<J>
}
