export interface OldData {
  rss: Rss;
}

export interface Rss {
  channel: Channel;
}

export interface Channel {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  language: string;
  wxr_version: number;
  base_site_url: string;
  base_blog_url: string;
  author: Author;
  category: Category[];
  term: Term;
  generator: string;
  item: Item[];
}

export interface Author {
  author_id: number;
  author_login: AuthorLogin;
  author_email: AuthorEmail;
  author_display_name: AuthorDisplayName;
  author_first_name: AuthorFirstName;
  author_last_name: AuthorLastName;
}

export interface AuthorLogin {
  __cdata: string;
}

export interface AuthorEmail {
  __cdata: string;
}

export interface AuthorDisplayName {
  __cdata: string;
}

export interface AuthorFirstName {
  __cdata: string;
}

export interface AuthorLastName {
  __cdata: string;
}

export interface Category {
  term_id: number;
  category_nicename: CategoryNicename;
  category_parent: CategoryParent;
  cat_name: CatName;
}

export interface CategoryNicename {
  __cdata: string;
}

export interface CategoryParent {
  __cdata: string;
}

export interface CatName {
  __cdata: string;
}

export interface Term {
  term_id: number;
  term_taxonomy: string;
  term_slug: TermSlug;
  term_name: TermName;
}

export interface TermSlug {
  __cdata: string;
}

export interface TermName {
  __cdata: string;
}

export interface Item {
  title: Title;
  link: string;
  pubDate: string;
  creator: Creator;
  guid: string;
  description: string;
  encoded: Encoded[];
  post_id: number;
  post_date: PostDate;
  post_date_gmt: PostDateGmt;
  post_modified: PostModified;
  post_modified_gmt: PostModifiedGmt;
  comment_status: CommentStatus;
  ping_status: PingStatus;
  post_name: PostName;
  status: Status;
  post_parent: number;
  menu_order: number;
  post_type: PostType;
  post_password: PostPassword;
  is_sticky: number;
  attachment_url?: AttachmentUrl;
  postmeta: any;
  category: { __cdata: string } | null;
  comment: any;
}

export interface Title {
  __cdata: string;
}

export interface Creator {
  __cdata: string;
}

export interface Encoded {
  __cdata: string;
}

export interface PostDate {
  __cdata: string;
}

export interface PostDateGmt {
  __cdata: string;
}

export interface PostModified {
  __cdata: string;
}

export interface PostModifiedGmt {
  __cdata: string;
}

export interface CommentStatus {
  __cdata: string;
}

export interface PingStatus {
  __cdata: string;
}

export interface PostName {
  __cdata: string;
}

export interface Status {
  __cdata: string;
}

export interface PostType {
  __cdata: string;
}

export interface PostPassword {
  __cdata: string;
}

export interface AttachmentUrl {
  __cdata: string;
}
