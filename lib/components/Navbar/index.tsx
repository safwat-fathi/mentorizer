"use client";

import useOutsideClick from "@/lib/hooks/useOutsiedClick";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import LangSwitcher from "../LangSwitcher";

const Navbar = () => {
  const tNavbar = useScopedI18n("global.navbar");
  const tGlobal = useScopedI18n("global");

  const pathname = usePathname();
  const searchparams = useSearchParams();

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useOutsideClick(detailsRef, closeDropdown);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname, searchparams]);

  return (
    <div role="navigation" className="bg-white">
      <div className="container navbar mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-40 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/apply-as-mentor">{tNavbar("startMentoring")}</Link>
              </li>
              <li>
                <Link href="/find">{tGlobal("actions.find")}</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/find?q=mentors">Mentors</Link>
                  </li>
                  <li>
                    <Link href="/find?q=circles">Circles</Link>
                  </li>
                  {/* <li>
                    <Link href="/find?q=internships">Internships</Link>
                  </li>
                  <li>
                    <Link href="/find?q=interns">Interns</Link>
                  </li> */}
                </ul>
              </li>

              {/* <li>
                <Link href="/post-internship">Post Internships</Link>
              </li> */}

              {/* <div className="md:hidden">
								<div className="divider"></div>

								<li className="flex flex-col gap-2">
									<Link href="/auth/login" className="btn btn-neutral">
										Login
									</Link>
									<Link href="/auth/signup" className="btn btn-primary">
										Signup
									</Link>
								</li>
							</div> */}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost font-messiri text-xl">
            Mentorizer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/apply-as-mentor">{tNavbar("startMentoring")}</Link>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>{tGlobal("actions.find")}</summary>
                <ul className="w-52 p-2">
                  <li>
                    <Link href="/find?q=mentors">Mentors</Link>
                  </li>
                  <li>
                    <Link href="/find?q=circles">Circles</Link>
                  </li>
                  <li>
                    <Link href="/find?q=internships">Internships</Link>
                  </li>
                  <li>
                    <Link href="/find?q=interns">Interns</Link>
                  </li>
                </ul>
              </details>
            </li>
            {/* <li>
							<Link href="/post-internship">Post Internships</Link>
						</li> */}
          </ul>
        </div>

        <div className="navbar-end hidden gap-2 md:flex">
          <div>
            <LangSwitcher />
          </div>
          {/* <Link href="/auth/login" className="btn btn-neutral">
						Login
					</Link>
					<Link href="/auth/signup" className="btn btn-primary">
						Signup
					</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
