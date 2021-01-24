import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <li className="post-link">
    <article>
      <h2 className="post-link-title">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2> 
      <div className="post-link-info">
        <p className="post-link-date"><span className={ `post-link-type type-${post.frontmatter.type}`}>{post.frontmatter.type}</span> | {post.frontmatter.date}</p>
        <p className={`post-link-featured featured-${post.frontmatter.featured}`}>Featured ★</p>
      </div>
      <p>{post.excerpt}</p>
    </article>
  </li>
);

export default PostLink;