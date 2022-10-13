import React from "react";
import { SidebarPortal } from "@plone/volto/components";
import { Segment } from 'semantic-ui-react';
import { withBlockExtensions } from "@plone/volto/helpers";
import RecommendationsData from "./RecommendationsData";
import RecommendationsBody from "./RecommendationsBody";

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <>
      <RecommendationsBody data={data} id={block} isEditMode />

      <SidebarPortal selected={selected}>
        <Segment.Group raised>
          <header className="header pulled">
            <h2>Recommendations Block</h2>
          </header>

          <RecommendationsData
            key={block}
            {...props}
            data={data}
            block={block}
            onChangeBlock={onChangeBlock}
          />

        </Segment.Group>
      </SidebarPortal>

    </>
  );
};

export default withBlockExtensions(Edit);
