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
