"use client";

import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

import useOutsideClick from "@/lib/hooks/useOutsideClick";

type Props = {
  children: ReactNode;
  trigger: ReactNode | string;
  triggerClassname?: string;
} & HTMLAttributes<HTMLUListElement>;

const Dropdown = ({ trigger, triggerClassname, children, className, ...props }: Props) => {
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    menuRef.current?.removeAttribute("open");
  };

  useOutsideClick(menuRef, closeDropdown);

  useEffect(() => {
    menuRef.current?.removeAttribute("open");
  }, [pathname, searchparams]);

  return (
    <ul className={clsx("menu menu-horizontal px-1", className)} {...props}>
      <li>
        <details ref={menuRef}>
          <summary className={triggerClassname}>{trigger}</summary>
          {children}
        </details>
      </li>
    </ul>
  );
};

export default Dropdown;
