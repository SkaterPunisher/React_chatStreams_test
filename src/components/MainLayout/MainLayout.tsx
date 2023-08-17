import { MainLayoutProps } from './MainLayout.props';
import styles from './MainLayout.module.scss';
import Ellipse from '../Ellipse/Ellipse';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Ellipse
        number={4}
        color={'#ffffff66'}
        positionRight={-50}
        positionBottom={50}
      />
      <Ellipse
        number={4}
        color={'#FFFFFF1A'}
        positionRight={-25}
        positionBottom={75}
      />
      {children}
    </div>
  );
};

export default MainLayout;
