import { HiHome } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";

const dashboardLinks = [
  {
    id: 1,
    title: "Home",
    path: "home",
    icon: HiHome,
  },
  {
    id: 2,
    title: "Community",
    path: "community",
    icon: IoPeopleOutline,
  },
  {
    id: 3,
    title: "Notifications",
    path: "notifications",
    icon: IoMdNotifications
  },
  {
    id: 4,
    title: "Messaging",
    path: "messaging",
    icon: BiMessageRounded
  },
];


export default dashboardLinks