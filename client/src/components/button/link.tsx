import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

export interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ to, children, className }: LinkProps) => (
  <NavLink to={to} className={className}>
    {children}
  </NavLink>
);

export default Link;
