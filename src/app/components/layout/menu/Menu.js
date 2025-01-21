import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import HouseIcon from "@mui/icons-material/House";

const options = [
  {
    name: "Productos",
    href: "/productos",
    icon: InventoryIcon,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: AlternateEmailIcon,
  },
  {
    name: "Devoluciones",
    href: "/devoluciones",
    icon: AssignmentReturnIcon,
  },
  {
    name: "Home",
    href: "/",
    icon: HouseIcon,
  },
];

export default function Menu() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <MenuIcon />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-0 translate-x-0 z-10 mt-5 flex flex w-[300px] -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {options.map((item) => (
              <div
                key={item.name}
                // className="flex items-center justify-start mt-1"
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "start",
                  verticalAlign: "center",
                }}
              >
                <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <span
                  //   className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <item.icon
                    //   aria-hidden="true"
                    //   className="size-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </span>
                  <span>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span
                      //   className="absolute inset-0"
                      />
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
