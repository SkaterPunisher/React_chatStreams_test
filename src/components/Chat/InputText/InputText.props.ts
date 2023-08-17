import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Chat } from '../../../types/chat';

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fetchData: (value: string) => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<string>>;
  setArrayMessages: React.Dispatch<React.SetStateAction<Chat[]>>;
};
