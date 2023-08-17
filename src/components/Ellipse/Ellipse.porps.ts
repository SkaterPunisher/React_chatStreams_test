import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type EllipseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  number: number;
  color: string;
  positionRight: number;
  positionBottom: number;
};
