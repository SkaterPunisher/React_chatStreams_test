import styles from './WindowChat.module.scss';
import { WindowChatProps } from './WindowChat.props';
import cn from 'classnames';
import Message from './Message/Message';

const WindowChat = ({
  loading,
  arrayMessages,
  className,
  ...props
}: WindowChatProps) => {
  return (
    <div className={cn(styles.wrapperChat, className)} {...props}>
      <Message arrayMessages={arrayMessages} />
      {loading && <i>Fetching data...</i>}
    </div>
  );
};

export default WindowChat;
