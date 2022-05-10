import { writable } from "svelte/store"
import { IPost } from "../Typings/posts"

const REDDIT = "https://www.reddit.com"

const loadPosts = () => {
  const {subscribe, set, update} = writable({
    posts: [] as IPost[],
    after: "",
    count: 0
  })

  const resetPosts = () => {
    set({
      posts: [],
      after: "",
      count: 0
    })
  }

  const fetchPosts = async (params: {
    feed: string, //the subreddit or user or whatever
    sort?: string,
    range?: string,
    after?: string,
    count?: number,
  }) => {
    const res = await fetch(`${REDDIT}${params.feed}.json?` + 
    new URLSearchParams({
      sort: params.sort,
      t: params.range,
      after: params.after,
      count: params?.count?.toString(),
      raw_json: "1"
    })
    )
    const data = (await res.json())?.data;
    if(data?.children && data?.after){
      update(p => ({
        posts: [...p.posts, ...data.children],
        after: data.after,
        count: p.count + data.children.length
      }))
    }
    return data;
  }

  return {
    subscribe, 
    fetchPosts,
    resetPosts,
  }
}

export const feed = loadPosts(); 