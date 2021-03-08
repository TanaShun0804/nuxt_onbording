import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import config from '../nuxt.config'
import { books as booksData } from '../db.json'
import { $axios } from '~/utils/api'

export interface Book {
  id: number
  name: string
  description: string
}

@Module({
  name: 'books',
  namespaced: true,
  stateFactory: true,
})
export default class BooksModule extends VuexModule {
  private _books: Book[] = []

  get books(): Book[] {
    return this._books
  }

  @Mutation
  private setList(payload: Book[]): void {
    this._books = payload
  }

  @Action({ rawError: true })
  async getList() {
    let res: any
    if (config.dev) {
      res = await $axios.$get('/books') // axios学習用
    } else {
      res = booksData
    }
    this.setList(res)
  }
}
