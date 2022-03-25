import React from 'react';
import './SectionTab.css';
import SectionTabItem from './SectionTabItem';

const setSelected = (id: number) => {
  tabs.forEach((tab) => {
    tab.selected = false;
  });
  const tab = tabs.find((tab) => tab.id === id);
  if (tab === undefined) return;
  tabs[tab.id].selected = true;
};

const tabs = [{
    text: 'Lens Protocol',
    id: 0,
    selected: true,
}, {
    text: 'Livepeer',
    id: 1,
    selected: false,
}, {
    text: 'Ceramic',
    id: 2,
    selected: false,
}]

export default function SectionTab() {
  return (
    <div className="size-medium-auto-layout-off-tab-content-text flex-row-vcenter-hcenter section-tab">
      {tabs.map((tab, index) => (
        <SectionTabItem key={index} {...tab} />
      ))}
    </div>
  );
};