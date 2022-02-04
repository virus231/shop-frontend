import { User } from "./User";

export interface State {
    user: User | null
    setUser: (user: User) => void
}