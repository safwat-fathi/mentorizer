"use client";

import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

import LangSwitcher from "../LangSwitcher";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const tNavbar = useScopedI18n("global.navbar");
  const tGlobal = useScopedI18n("global");

  return (
    <div role="navigation" className="sticky top-0 z-50 bg-white shadow">
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
                    <Link href="/coming-soon">Mentors</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Circles</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Internships</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Interns</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/guides">Guides</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/coming-soon">Mentees</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Mentors</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Circles</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/post-internship">Post Internships</Link>
              </li>

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
          <Link href="/" className="font-messiri text-xl font-semibold">
            Mentorizer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Dropdown trigger={tNavbar("startMentoring")}>
            <ul className="z-10 !mt-5 w-52 p-2">
              <li>
                <Link href="/coming-soon">Mentors</Link>
              </li>
              <li>
                <Link href="/coming-soon">Circles</Link>
              </li>
              <li>
                <Link href="/coming-soon">Internships</Link>
              </li>
              <li>
                <Link href="/coming-soon">Interns</Link>
              </li>
            </ul>
          </Dropdown>

          <Dropdown trigger="Guides">
            <ul className="z-10 !mt-5 w-52 p-2">
              <li>
                <Link href="/coming-soon">Mentees</Link>
              </li>
              <li>
                <Link href="/coming-soon">Mentors</Link>
              </li>
              <li>
                <Link href="/coming-soon">Circles</Link>
              </li>
            </ul>
          </Dropdown>

          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/coming-soon">Post Internships</Link>
            </li>
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
