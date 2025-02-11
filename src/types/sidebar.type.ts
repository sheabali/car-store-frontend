import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};
export type TUserRole = {
  admin: string;
  faculty: string;
  student: string;
};

export type TUserPaths = {
  icon: string;
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};
