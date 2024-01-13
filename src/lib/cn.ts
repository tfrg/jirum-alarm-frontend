import { type CxOptions, cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: CxOptions) => {
  return twMerge(cx(inputs));
};
