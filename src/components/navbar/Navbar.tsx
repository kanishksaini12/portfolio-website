//import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import { useState } from "react";
import { Menu, MenuItem } from "../../ui/navbar-menu";
import { cn } from "../../utils/cn";
import "./Navbar.css";
import pdf from "../../assets/resume.pdf";

function Navbar({ active, setActive }: any) {
  function setActiveMenu(event: any) {
    if (event.toLowerCase() === "resume") {
      window?.open(pdf, "_blank")?.focus();
    } else {
      setActive(event);
    }
  }

  return (
    <div
      className={cn(
        "fixed top-8 inset-x-0 max-w-[25em] mx-auto z-50 left-[4em]"
      )}
    >
      <Menu setActive={setActiveMenu}>
        <MenuItem setActive={setActiveMenu} active={active} item="Home" />
        <MenuItem setActive={setActiveMenu} active={active} item="About" />
        <MenuItem setActive={setActiveMenu} active={active} item="Work" />
        <MenuItem setActive={setActiveMenu} active={active} item="Contact" />
        <MenuItem setActive={setActiveMenu} active={active} item="Resume" />
      </Menu>
    </div>
  );
}

export default Navbar;
