import { useMemo } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import { State } from "../utils/types/State";
import { User } from "../utils/types/User";

let store;

const state: { user: null } = {
    user: null
}

function initStore(preloadedState = state)
{
    return create<State>(persist((set, get) => ({
            ...state,
            ...preloadedState,
            setUser: (user: User) => set(() => ({ user })),
            getMe: (token: string) => {}
        }),
        { name: "user", getStorage: () => localStorage }
    ))
}

export const initializeStore = (preloadedState?) =>
{
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Zustand state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store)
    {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useHydrate(initialState)
{
    const state = typeof initialState === "string" ? JSON.parse(initialState) : initialState
    return useMemo(() => initializeStore(state), [state])
}
