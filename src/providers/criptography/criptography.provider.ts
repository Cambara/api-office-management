
export interface ICriptographyProvider {
    encrypt(value: string): Promise<string>
}
