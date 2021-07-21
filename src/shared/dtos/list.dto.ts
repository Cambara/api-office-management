
export interface IListRequestDto {
    page?: number
    limit?: number
}

export interface IListDto extends IListRequestDto{
    userId: string
}
