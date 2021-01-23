import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ post }) => (
  <li className="blog-link">
    <article>
      <h2 className="blog-link-heading">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2> 
      <div className="blog-link-info">
      <p className="blog-link-date"><span className="blog-link-type">{post.frontmatter.type}</span> | {post.frontmatter.date}</p>
      </div>
      <p>{post.excerpt}</p>
    </article>
  </li>
);

export default BlogLink;