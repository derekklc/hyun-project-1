import styles from './search-bar.module.scss';
import RHLogo from '../rhlogo/rhlogo';

export function SearchBar() {
  return (
    <div className={styles['container']}>
      <div className={styles['inner-container']}>
        <div className={styles['logo-container']}>
          <RHLogo />
        </div>
        <div className={styles['search-box']}></div>
      </div>
    </div>
  );
}

export default SearchBar;
