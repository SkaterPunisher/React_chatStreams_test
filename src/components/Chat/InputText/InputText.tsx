import { useState } from 'react';
import { InputProps } from './InputText.props';
import styles from './InputText.module.scss';
import cn from 'classnames';
import SendMessageIcon from '@/assets/images/sendMessage.svg';

const InputText = ({
  fetchData,
  setData,
  setArrayMessages,
  className,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      setArrayMessages((prevValue) => [
        ...prevValue,
        { message: value, idChat: 'user' },
      ]);
      setData(() => '');
      setValue(() => '');
      fetchData(value);
    } else {
      alert('Min symblol is 1');
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.inputWrapper, className)}
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Start typing here...'
        {...props}
      />
      <div className={styles.iconWrapper} onClick={handleClick}>
        <img src={SendMessageIcon} alt='' />
      </div>
    </div>
  );
};

export default InputText;
