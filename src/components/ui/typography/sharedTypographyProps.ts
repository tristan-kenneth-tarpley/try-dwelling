import classNames from "../../../utils/classNames";

export interface SharedTypographyProps {
  color?: 'light' | 'dark';
}

export const sharedTypographyStyles = ({color = 'dark'}: SharedTypographyProps) => classNames({
  'text-beige-200': color === 'light',
  'text-stone-800': color === 'dark',
});