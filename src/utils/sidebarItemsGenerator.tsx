import {
  Home,
  Settings,
  LucideIcon,
  User,
  CirclePlus,
  ArrowDownToDot,
  Car,
  Outdent,
} from 'lucide-react';
import { TSidebarItem, TUserPaths } from '../types';

const iconsMap: Record<string, LucideIcon> = {
  Home,
  Settings,
  User,
  CirclePlus,
  ArrowDownToDot,
  Car,
  Outdent,
};
// console.log('iconsMap[item.icon]', iconsMap[item?.icon]);
export const sidebarItemsGenerator = (
  items: TUserPaths[],
  role: string
): TSidebarItem[] => {
  return items.map((item) => ({
    title: item.name ?? 'Untitled',
    url: `/${role}/${item.path || ''}`,
    icon: iconsMap[item.icon] ?? Home,
  }));
};
