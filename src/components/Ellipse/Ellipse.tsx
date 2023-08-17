import styles from './Ellipse.module.scss';
import { EllipseProps } from './Ellipse.porps';
import cn from 'classnames';

const Ellipse = ({
  number,
  color,
  positionRight,
  positionBottom,
  className,
  ...props
}: EllipseProps) => {
  const arrayEllipse: number[] = Array(number).fill(0);

  return (
    <>
      {arrayEllipse.map((_, index) => (
        <div
          key={index}
          className={cn(styles.ellipses_1, className)}
          style={{
            width: 300 + index * 150,
            height: 300 + index * 150,
            borderColor: color,
            right: positionRight - 75 * index,
            bottom: positionBottom - 75 * index,
          }}
          {...props}
        ></div>
      ))}
    </>
  );
};

export default Ellipse;
