import useSwr from "swr";


export const useRequest = (path, fetcher, name? ) => {
    if (!path) {
        throw new Error('Path is required')
    }

    const url = name ? process.env.BASE_URL + path + '/' + name : process.env.BASE_URL + path
    const { data, error } = useSwr(url, fetcher)

    return { data, error }
}