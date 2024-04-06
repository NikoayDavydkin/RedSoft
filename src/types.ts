export interface IAction {
  type: string;
  payload?: any;
}
export interface IChildren {
  key: string;
  name: string;
}

export interface IParrent {
  key: string;
  name: string;
  children: Array<IChildren> ;
}

export interface IDeafaultState {
  logined: boolean;
  data: Array<IParrent>;
  activeParrent: string;
  loading: boolean;
}
