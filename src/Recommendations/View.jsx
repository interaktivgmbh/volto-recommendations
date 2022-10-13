import React from "react";
import { withBlockExtensions } from "@plone/volto/helpers";
import RecommendationsBody from "./RecommendationsBody";


const View = (props) => {
  return <RecommendationsBody {...props} />;
};

export default withBlockExtensions(View);
