import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import config from '../nuxt.config'
import { members as membersData } from '../db.json'
import { $axios } from '~/utils/api'

export interface Member {
  id: number
  firstName: string
  lastName: string
  nickname: string
  description: string
  locationDetail: string
  families: []
  dobYear: number
  dobMonth: number
  dobDay: number
  hobbies: []
  skills: []
}

@Module({
  name: 'members',
  namespaced: true,
  stateFactory: true,
})
export default class MembersModule extends VuexModule {
  private _members: Member[] = []
  private _loading: boolean = true

  get members(): Member[] {
    return this._members
  }

  get member(): Member {
    return this._members[0]
  }

  get loading(): boolean {
    return this._loading
  }

  @Mutation
  private setList(payload: Member[]): void {
    this._members = payload
    this._loading = false
  }

  @Action({ rawError: true })
  async getList() {
    let res: any
    if (config.dev) {
      res = await $axios.$get('/members') // axios学習用
    } else {
      res = membersData
    }
    this.setList(res)
  }
}
