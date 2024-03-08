export class ColumnDateTransformer {
  public to(data: string): string {
    return data
  }
  public from(data: any): string {
    try {
      return !data ? null : new Date(data).toISOString()
    } catch (error) {
      return null
    }
  }
}
