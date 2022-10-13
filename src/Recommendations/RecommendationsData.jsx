import React from "react";
import { BlockDataForm } from "@plone/volto/components";
import RecommendationsSchema from "./schema";

const RecommendationsData = (props) => {
  const { data, block, onChangeBlock } = props;
  const schema = RecommendationsSchema({ ...props });
  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default RecommendationsData;
