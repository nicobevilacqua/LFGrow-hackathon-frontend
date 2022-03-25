import React from 'react';
import './SectionTabItem.css';

const SectionTabItem = (props: {
  text: string;
  selected: boolean;
  id: number;
}) => {
  return (
    <>
      <div className={`frame-10427 flex-col-hcenter-vcenter ${props.selected ? 'selected' : ''}`}>
        <div className="component-5 flex-row-vstart-hstart">
          <p className="txt-261">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default SectionTabItem;
