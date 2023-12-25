export interface IPost {
  _id: string
  title: string,
  content: string,
  date: Date,
  views: number,
  tags: Array<string>
}