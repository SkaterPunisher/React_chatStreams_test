import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Chat } from '../../../types/chat';

export type WindowChatProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  loading: boolean;
  arrayMessages: Chat[];
  data: string;
};
