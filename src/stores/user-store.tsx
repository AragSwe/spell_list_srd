import { observable, action, computed } from "mobx";

export type TUser = {
    
}

export class UserStore {
    @observable userToken = "";
}