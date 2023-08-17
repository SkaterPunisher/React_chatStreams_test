import { MessageProps } from './Message.props';
import BotImages from '@/assets/images/botImages.svg';
import UserImages from '@/assets/images/userImages.svg';
import uniqid from 'uniqid';
import cn from 'classnames';
import styles from './Message.module.scss';

const Message = ({ arrayMessages }: MessageProps) => {
  return (
    <>
      {arrayMessages.map((message) => {
        return (
          <div
            key={uniqid()}
            className={cn(styles.wrapper, {
              [styles.userWrapper]: message.idChat === 'user',
            })}
          >
            {message.idChat === 'bot' && (
              <div
                className={cn(styles.img, {
                  [styles.botImg]: message.idChat === 'bot',
                })}
              >
                <img
                  src={message.idChat == 'bot' ? BotImages : UserImages}
                  alt=''
                />
              </div>
            )}
            <div
              className={cn(styles.wrapperMessage, {
                [styles.user]: message.idChat === 'user',
                [styles.bot]: message.idChat === 'bot',
              })}
            >
              {message.message}
            </div>
            {message.idChat === 'user' && (
              <div className={cn(styles.img, styles.userImg)}>
                <img src={UserImages} alt='' />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Message;
