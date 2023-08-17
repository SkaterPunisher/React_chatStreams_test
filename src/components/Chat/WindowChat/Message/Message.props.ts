import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Chat } from '../../../../types/chat';

export type MessageProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  arrayMessages: Chat[];
};
