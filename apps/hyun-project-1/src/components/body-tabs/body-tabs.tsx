import styles from './body-tabs.module.scss';
import { ReactElement, useState } from 'react';
import { TabIDs } from '../../enums';
import { TabNames } from '../../constants';
import ServicesPage from '../../pages/services-page/services-page';
import SignupPage from '../../pages/signup-page/signup-page';

// import melbPic1 from '../../images/melb-pic-1.jpg';

// const tabNamesArray = Object.keys(TabIDs).map((id) => {
//   return TabNames[TabIDs[id as keyof typeof TabIDs]] || '';
// });

const tabTitles = (name: string, updateTab: (name: TabIDs) => void) => {
  return (
    <div className={styles['tab-titles-container']}>
      {Object.values(TabIDs).map((item) => {
        const tabName = TabNames[item];
        return (
          <button
            className={styles['tab-title-button']}
            key={item}
            onClick={() => updateTab(item as TabIDs)}
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
};
const tabContentLeftSideBar = () => {
  const imgArray = ['melb-pic-1.jpg', 'melb-pic-2.jpeg'];
  return (
    <div className={styles['tab-side-bar-container']}>
      {imgArray.map((imgPath) => {
        let fullPath = '';
        try {
          fullPath = require(`../../images/${imgPath}`);
        } catch {
          return <></>;
        }
        return (
          fullPath && (
            <img
              height={200}
              width={100}
              key={imgPath}
              src={fullPath}
              className={styles['tab-side-bar-img']}
            />
          )
        );
      })}
    </div>
  );
};
const tabContentRightSideBar = () => {
  const imgArray = ['melb-pic-3.jpg', 'melb-pic-4.webp'];
  return (
    <div className={styles['tab-side-bar-container']}>
      {imgArray.map((imgPath) => {
        let fullPath = '';
        try {
          fullPath = require(`../../images/${imgPath}`);
        } catch {
          return <></>;
        }
        return (
          fullPath && (
            <img
              height={200}
              width={100}
              src={fullPath}
              className={styles['tab-side-bar-img']}
            />
          )
        );
      })}
    </div>
  );
};

const tabPage = (name: string) => {
  const getTabContent = () => {
    switch (name) {
      case TabIDs.NEWS:
        return <div>{name}</div>;
      case TabIDs.SERVICES:
        return <ServicesPage />;
      default:
        return <div>{name}</div>;
    }
  };
  return <div className={styles['tab-content']}>{getTabContent()}</div>;
};

export function BodyTabs() {
  const [tabName, setTabName] = useState(TabIDs.NEWS);
  const updateTabName = (name: TabIDs) => {
    setTabName(name);
  };
  return (
    <div className={styles['container']}>
      {tabTitles(tabName, updateTabName)}
      <div className={styles['tab-area-container']}>
        {tabContentLeftSideBar()}
        {tabPage(tabName)}
        {/* {tabContentRightSideBar()} */}
      </div>
    </div>
  );
}

export default BodyTabs;
