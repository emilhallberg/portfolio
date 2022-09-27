import { FC, ReactNode } from "react";

export interface ExternalProps {
  children: ReactNode | string;
  to: string;
  className?: string;
}

const External: FC<ExternalProps> = ({
  className,
  children,
  to,
}: ExternalProps) => (
  <a className={className} href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default External;
