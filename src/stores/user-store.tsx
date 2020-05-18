//import { observable, action, computed } from "mobx";
import { observable, action } from "mobx";

export type TUser = {
    userToken:string;
    name:string;
}

export class UserStore {
    @observable user:TUser|null = null;

    @action
    setUserInfo(token:string, name:string) {
        this.user = {
            userToken: token,
            name
        }
    }
}