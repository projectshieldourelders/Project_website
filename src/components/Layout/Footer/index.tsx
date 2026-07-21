import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { footerLinks } from "@/app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: FC = () => {
  return (
    <footer className="pt-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-10 ">
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <Logo />
            <div className="mt-6">
              <p className="text-base font-normal text-dustGray dark:text-white/60 mb-6">
                A repeated-site elder scam defense program for Brevard County seniors, caregivers, libraries, and senior-serving sites.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <div className="lg:pl-10">
              <div className="flex items-start mb-8 gap-4">
                <Image
                  src="/images/icons/icon-pin.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <h5 className="text-base font-normal text-black dark:text-white mb-4">
                    Community focus
                  </h5>
                  <p className="text-base text-dustGray dark:text-white/60">
                    Built for older adults and trusted helpers in Brevard County and beyond.
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8 gap-4">
                <Image
                  src="/images/icons/icon-phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link
                    href="/contact"
                    className="text-base text-black dark:text-white mb-0 hover:text-primary!"
                  >
                    Request a workshop
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link
                    href="mailto:projectshieldourelders@gmail.com"
                    className="text-base text-black dark:text-white mb-0 hover:text-primary!"
                  >
                    projectshieldourelders@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base text-black dark:text-white mb-4">
              Program Areas
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={item.href}
                    className="text-base relative text-dustGray dark:text-white/60 hover:text-primary dark:hover:text-primary before:border-dustGray/60 hover:before:border-dustGray before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-1 before:border-r-1 before:top-1 before:-left-5 before:rotate-45"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base text-black dark:text-white mb-4">
              Other Links
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(5).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={item.href}
                    className="text-base relative text-dustGray dark:text-white/60 hover:text-primary dark:hover:text-primary before:border-dustGray/60 hover:before:border-dustGray before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-1 before:border-r-1 before:top-1 before:-left-5 before:rotate-45">
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border dark:border-dark_border">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex items-center justify-between py-6 lg:flex-nowrap flex-wrap lg:gap-0 gap-4">
          <p className="text-base text-dustGray dark:text-white">
            © All Rights Reserved by{" "}
            <Link
              href="/"
              className="hover:text-primary!"
            >
              Shield Our Elders
            </Link>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon
                icon="ri:facebook-fill"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="mdi:instagram"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="ri:linkedin-fill"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="line-md:twitter-x-alt"
                className="text-base text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
