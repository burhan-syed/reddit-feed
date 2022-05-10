export enum FlairTextColor {
    Dark = 'dark',
}
export const enum AuthorFlairType {
    Richtext = 'richtext',
    Text = 'text',
}
export const enum SubredditType {
    Public = 'public',
    Restricted = 'restricted',
}
export interface AuthorFlairRichtext {
    e: AuthorFlairType;
    t: string;
}
export interface Source {
    url: string;
    width: number;
    height: number;
}
export interface Image {
    source: Source;
    resolutions: Source[];
    variants: any;
    id: string;
}
export interface Preview {
    images: Image[];
    enabled: boolean;
}
export enum PostHint {
    Link = 'link',
}
export interface IPost{
	kind: string;
	data: {
    	all_awardings: any[];
		allow_live_comments: boolean;
		approved_at_utc: null;
		approved_by: null;
		archived: boolean;
		author_flair_background_color: null;
		author_flair_css_class: null | string;
		author_flair_richtext: AuthorFlairRichtext[];
		author_flair_template_id: null | string;
		author_flair_text_color: FlairTextColor | null;
		author_flair_text: null | string;
		author_flair_type: AuthorFlairType;
		author_fullname: string;
		author_patreon_flair: boolean;
		author: string;
		awarders: any[];
		banned_at_utc: null;
		banned_by: null;
		can_gild: boolean;
		can_mod_post: boolean;
		category: null;
		clicked: boolean;
		content_categories: null;
		contest_mode: boolean;
		created_utc: number;
		created: number;
		crosspost_parent_list?: IPost[];
		crosspost_parent?: string;
		discussion_type: null;
		distinguished: null | string;
		domain: string;
		downs: number;
		edited: boolean;
		gilded: number;
		gildings: any;
		hidden: boolean;
		hide_score: boolean;
		id: string;
		is_crosspostable: boolean;
		is_meta: boolean;
		is_original_content: boolean;
		is_reddit_media_domain: boolean;
		is_robot_indexable: boolean;
		is_self: boolean;
		is_video: boolean;
		likes: null;
		link_flair_background_color: string;
		link_flair_css_class: null;
		link_flair_richtext: any[];
		link_flair_text_color: FlairTextColor;
		link_flair_text: null;
		link_flair_type: AuthorFlairType;
		locked: boolean;
		media_embed: any;
		media_only: boolean;
		media: null;
		mod_note: null;
		mod_reason_by: null;
		mod_reason_title: null;
		mod_reports: any[];
		name: string;
		no_follow: boolean;
		num_comments: number;
		num_crossposts: number;
		num_reports: null;
		over_18: boolean;
		parent_whitelist_status: null | string;
		permalink: string;
		pinned: boolean;
		post_hint: PostHint;
		preview: Preview;
		pwls: number | null;
		quarantine: boolean;
		removal_reason: null;
		report_reasons: null;
		saved: boolean;
		score: number;
		secure_media_embed: any;
		secure_media: null;
		selftext_html: null;
		selftext: string;
		send_replies: boolean;
		spoiler: boolean;
		steward_reports: any[];
		stickied: boolean;
		subreddit_id: string;
		subreddit_name_prefixed: string;
		subreddit_subscribers: number;
		subreddit_type: SubredditType;
		subreddit: string;
		suggested_sort: null;
		thumbnail_height: number;
		thumbnail_width: number;
		thumbnail: string;
		title: string;
		total_awards_received: number;
		ups: number;
		url: string;
		url_overridden_by_dest: string;
		user_reports: any[];
		view_count: null;
		visited: boolean;
		whitelist_status: null | string;
		wls: number | null;
	}
}

interface MediaInfoDetail {
  url: string;
  height: number;
  width: number; 
}
export interface MediaInfo{
  isPortrait: boolean;
  isImage: boolean;
  isVideo: boolean;
  isLink: boolean;
  isGallery: boolean;
  isSelf: boolean;
  isTweet: boolean;
  isIframe: boolean;
  hasMedia: boolean;
  videoInfo: MediaInfoDetail;
  imageInfo: MediaInfoDetail[];
  thumbnailInfo: MediaInfoDetail[];
  gallery: MediaInfoDetail[];
  dimensions: [number, number];
  iFrameHTML: Element | null;
}