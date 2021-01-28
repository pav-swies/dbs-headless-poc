---
featured: true
title: Headless PoC - Gatsby with Netlify CMS Findings
date: 2021-01-28T00:38:40.863Z
type: blue
---
Some personal findings from my time using Gatsby and Netlify CMS.

## Gatsby

### Pros

* The initial setup is simple. It allows you to select some starter plugins, like which CSS framework you want to use and which CMS you'd like to install. It also comes with a local development environment with live reload by default.
* When running the live localhost, or when building the site, the console automatically picks up on issues such as accessibility issues or security issues and usually provides a solution for the problem. For example, `"11:49   warning  Using target="_blank" without rel="noreferrer" is a security risk: see https://html.spec.whatwg.org/multipage/links.html#link-type-noopener  react/jsx-no-target-blank"`.
* GraphQL is great for getting data. Better yet, the GraphiQL tool makes finding data really easy.
* The documentation is great and there is a large community surrounding Gatsby and React. An answer to a problem can almost always be found easily and quickly.
* There are many plugins to choose from. Some of them are official Gatsby plugins, and many of them are community made. The plugins are very easy to install and usually have good documentation.
* The built sites are **fast.** Straight 💯s in Lighthouse.
* Incremental builds are supported on services like Netlify and Gatsby Cloud (potentially others). This can massively increase build times and decrease build minute usage.

### Cons

* Sometimes doing simple things can be frustatingly difficult.
* Have to use React. This could be a good thing since we'd get to learn something new and that is seemingly in demand/hyped. Because of this ,however, building things that would usually take a short amount of time to build with vanilla JavaScript may take a lot longer to build to start with since we'll have to adapt to how it'd be done in React.

## Netlify CMS

### Pros

* It's very customisable and easy to build on. It seems like you can build any kind of component that you want to.
* The editorial workflow is a nice feature, especially for content writers.
* Really easy to use for things like blogging out of the box. Just point at a folder where you want your files to be spat out into, set up some fields and you're ready to go.
* Works really well with Netlify for things like user management.

### Cons

* No true live preview. The site has to be rebuilt each time you publish a page, which can take a while. Customising the preview window to match your site is a good workaround, but it's still not as good as WordPress.
* Too few features out of the box. Could be a good thing though, as there is no clutter.
* Some features are optimised for GitHub, while some of them are only in beta for BitBucket. I used GitHub for my PoC site, therefore I don’t know how much of a problem this really would be.
* The documentation is pretty weak. It seems pretty incomplete in some areas or very vague. Often I found the answer I was looking for on a random forum on the third page of Google.
* It's Open Source - Relies on the community to keep it updated. While this is nice in some ways, often it means that it doesn't get as much time put into it as a paid service would, leaving many started features abandoned.



Overall, I think that Gatsby is great and I can definitely see us using it for client builds. Netlify CMS is also good and would work great for something like the DbS website rebuild, but I'm not sure it would be good enough for client builds if they wanted something more than basic content editing. Building a blog is really simple, and while possible, building a widget that allows flexible layouts would probably be too much of a faff. There are other content management systems out there that seem to do that out of the box, without having to write that functionality yourself.