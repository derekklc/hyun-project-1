import styles from './body-tabs.module.scss';
import { useState } from 'react';
import { TabIDs } from '../../enums';
import { TabNames } from '../../constants';

const tabNamesArray = Object.keys(TabIDs).map((id) => {
  return TabNames[TabIDs[id as keyof typeof TabIDs]] || '';
});

const tabTitles = (name: string, updateTab: (name: TabIDs) => void) => {
  return (
    <div className={styles['tab-titles-container']}>
      {tabNamesArray.map((item) => {
        return (
          <button
            className={styles['tab-title-button']}
            key={item}
            onClick={() => updateTab(item as TabIDs)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

const tabPage = (name: string) => {
  return <div>{name}</div>;
};

export function BodyTabs() {
  const [tabName, setTabName] = useState(TabIDs.NEWS);
  const updateTabName = (name: TabIDs) => {
    setTabName(name);
  };
  return (
    <div className={styles['container']}>
      {tabTitles(tabName, updateTabName)}
      {tabPage(tabName)}
    </div>
  );
}

export default BodyTabs;
