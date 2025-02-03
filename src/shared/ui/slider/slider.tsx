import style from './slider.module.scss';
import type { Properties } from './slider.properties';

const Slider = (properties: Properties) => {
  const { children, ref } = properties;

  return (
    <div ref={ref}>
      <ul className={style.slider}>{children}</ul>
    </div>
  );
};

export { Slider };
