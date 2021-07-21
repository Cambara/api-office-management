
interface IGetPaginatorData {
    skip: number
    limit: number
}

export const getPaginatorData = (page = 1, limit = 10):IGetPaginatorData => {
  const skip = (page - 1) * limit
  return {
    skip,
    limit
  }
}
