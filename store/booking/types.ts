import { Commit, Dispatch } from 'vuex'

export interface RootState {}

export interface ActionContext<S, R> {
  commit: Commit
  dispatch: Dispatch
  state: S
  rootState: R
}

export interface IException {
  id: number
  date: string
  replacingMultiplier?: number
}

export interface IPriceTable {
  id: number
  weekday: number
  friday: number
  saturday: number
  sunday: number
  createdAt: string
  updatedAt: string
  exceptions: IException[]
}

export enum ObjectType {
  House,
  Apartment,
  Bathhouse,
}
