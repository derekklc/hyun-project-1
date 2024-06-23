import styles from './search-bar.module.scss';
import RHLogo from '../rhlogo/rhlogo';
import { AppFlow } from '../../enums';

interface ISearchBar {
  setAppFlow: (stage: AppFlow) => void;
}

export const SearchBar: React.FC<ISearchBar> = (props) => {
  const { setAppFlow } = props;
  return (
    <div className={styles['container']}>
      <div className={styles['inner-container']}>
        <div
          className={styles['logo-container']}
          onClick={() => {
            setAppFlow(AppFlow.CONTENT);
          }}
        >
          <RHLogo />
        </div>
        <form>
          <input type="text" name="search" className={styles['search-box']} />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
