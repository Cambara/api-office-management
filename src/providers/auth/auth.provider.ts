
export interface IAuthProvider<T> {
    sign(data:T):string
    verify(token:string):T
}
