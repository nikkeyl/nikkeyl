import { PropsWithChildren } from 'react';

import styles from './content.module.scss';

const Content = ({ children }: PropsWithChildren) => (
  <main className={styles.wrapper}>{children}</main>
);

export { Content };
