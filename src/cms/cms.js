import CMS from "netlify-cms-app";
import React from "react";
import moment from 'moment';

import Layout from "../templates/template-layout";

const RedPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <Layout headerTitle="Don't be Shy" theme="red">
      <article className="red-post">
        <header className="red-post-header">
          <h1 className="red-post-title">{data.title}</h1>
          <p className="red-post-date">{moment(data.date).format("Do MMMM YYYY")}</p>
        </header>
        <div className="red-post-content">
          {widgetFor("body")}
        </div>
      </article>
    </Layout>
  );
};

const BluePostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <Layout headerTitle="Don't be Shy" theme="blue">
    <article className="blue-post">
      <header className="blue-post-header">
        <h1 className="blue-post-title">{data.title}</h1>
        <p className="blue-post-date">{moment(data.date).format("Do MMMM YYYY")}</p>
      </header>
      <div className="blue-post-content">
        {widgetFor("body")}
      </div>
    </article>
  </Layout>
  );
};

CMS.registerPreviewTemplate("red", RedPostPreview);
CMS.registerPreviewTemplate("blue", BluePostPreview);

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + obj.id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: "icon-and-text",
//   // Visible label
//   label: "Icon and Text",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {name: 'icon', label: 'Icon', widget: 'image'},
//     {name: 'text', label: 'Text', widget: 'text'}
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^icon-and-text (\S+)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       id: match[1]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return 'icon-and-text ' + obj.id;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     return (
//       '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
//     );
//   }
// });
