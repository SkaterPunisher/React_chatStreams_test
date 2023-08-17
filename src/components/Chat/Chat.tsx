import styles from './Chat.module.scss';
import Title from './Title/Title';
import { ChatProps } from './Chat.props';
import cn from 'classnames';
import WindowChat from './WindowChat/WindowChat';
import InputText from './InputText/InputText';
import { useChat } from './useChat';

const Chat = ({ className, ...props }: ChatProps) => {
  const { loading, data, fetchData, setData, setArrayMessages, arrayMessages } =
    useChat();

  return (
    <div className={cn(styles.wrapperContainer, className)} {...props}>
      <Title />
      <WindowChat loading={loading} data={data} arrayMessages={arrayMessages} />
      <InputText
        fetchData={fetchData}
        setData={setData}
        setArrayMessages={setArrayMessages}
      />
    </div>
  );
};

export default Chat;
