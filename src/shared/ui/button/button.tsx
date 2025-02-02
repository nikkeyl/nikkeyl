import style from './button.module.scss';
import type { Properties } from './button.properties';

const Button = ({ text }: Properties) => (
  <button className={style.wrapper} type='button'>
    {text}
  </button>
);

export { Button };
