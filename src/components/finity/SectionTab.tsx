import React, { useState } from 'react';
import './SectionTab.css';
import SectionTabItem from './SectionTabItem';

const tabs = [
  {
    text: 'All',
    id: 0,
    selected: true,
  },
  {
    text: 'Lens Protocol',
    id: 1,
    selected: false,
  },
  {
    text: 'Livepeer',
    id: 2,
    selected: false,
  },
  {
    text: 'Chainlink',
    id: 3,
    selected: false,
  },
];

export default function SectionTab(props: { handleSelectedTopic: any }) {
  const [selected, setSelected] = useState('All');

  const handleSelected = (name) => {
    setSelected(name);
    props.handleSelectedTopic(name);
  };

  return (
    <div className="size-medium-auto-layout-off-tab-content-text flex-row-vcenter-hcenter section-tab">
      {tabs.map((tab, index) => (
        <SectionTabItem key={index} {...tab} handleSelected={handleSelected} selected={selected} />
      ))}
    </div>
  );
}
