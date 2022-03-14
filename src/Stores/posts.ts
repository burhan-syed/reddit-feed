import { writable } from "svelte/store";
import type { IPost } from "../Typings/posts";


const cache = new Map();
export function fetchBestPosts() {
    const store = writable(new Promise((resolve) => {}));
    if(cache.has('best_posts')) {
        store.set(Promise.resolve(cache.get('best_posts')));
    }
    const load = async () => {
        const data = (await (await fetch('https://www.reddit.com/best.json')).json() as any).data.children as IPost[];
        console.log(data)
        cache.set('best_posts', data);
        store.set(Promise.resolve(data));
    }
    load();
    return store;

}

export function fetchSubreddit(subreddit: string) {
    const store = writable(new Promise((resolve) => {}));
    if(cache.has(subreddit)) {
        store.set(Promise.resolve(cache.get(subreddit)));
    }
    const load = async () => {
        const data = (await (await fetch(`https://www.reddit.com/r/${subreddit}.json`)).json() as any).data.children as IPost[];
        cache.set(subreddit, data);
        store.set(Promise.resolve(data));
    }
    load();
    return store;
}