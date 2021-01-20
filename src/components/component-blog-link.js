import React from "react";
import { Link } from "gatsby";

const BlogLink = ({ post }) => (
  <li className="o-doc-link">
    <article>
      <h2 className="o-doc-link__heading">
        <Link className="u-faux-link" to={post.fields.slug}>{ post.frontmatter.title }</Link>
      </h2> 
      <p className="o-doc-link__date">{ post.frontmatter.date }</p>
      <p>{ post.excerpt }</p>
      <p></p>
    </article>
  </li>
);

export default BlogLink;