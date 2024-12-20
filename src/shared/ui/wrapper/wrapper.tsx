import { PropsWithChildren } from 'react';

import styles from './wrapper.module.scss';

const Wrapper = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);

export { Wrapper };
