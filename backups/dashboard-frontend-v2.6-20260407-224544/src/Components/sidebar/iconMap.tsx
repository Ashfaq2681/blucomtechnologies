import type { IconType } from "react-icons";
import {
  HiLogin,
  HiOutlineChat,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineStar,
  HiOutlineTag,
  HiOutlineTruck,
  HiOutlineUser,
  HiUserGroup,
} from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import type { SidebarIconName } from "./types";

export const sidebarIconMap: Record<SidebarIconName, IconType> = {
  home: HiOutlineHome,
  blog: HiOutlineChat,
  profile: HiOutlineUser,
  products: HiOutlineDevicePhoneMobile,
  categories: HiOutlineTag,
  orders: HiOutlineTruck,
  users: HiOutlineUser,
  reviews: HiOutlineStar,
  notifications: HiOutlineInformationCircle,
  auth: HiUserGroup,
  login: HiLogin,
  register: HiUserGroup,
  help: HiOutlineInformationCircle,
};
