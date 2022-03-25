import React from 'react';
import './SectionTabItem.css';

const SectionTabItem = (props: {
  text: string;
  id: number;
  handleSelected: any;
  selected: string;
}) => {
  return (
    <>
      <div
        className={`frame-10427 flex-col-hcenter-vcenter ${
          props.selected === props.text ? 'selected' : ''
        }`}
        onClick={() => props.handleSelected(props.text)}
      >
        <div className="component-5 flex-row-vstart-hstart">
          <p className="txt-261">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default SectionTabItem;
