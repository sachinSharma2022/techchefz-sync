"use client";

import Image from "next/image";
import Styles from "./Header.module.scss";
import Link from "next/link";
import CustomButton from "@/components/customButton";
import SubMenuCard from "./subMenuCard";

const Header = () => {
  return (
    <header className={Styles.headerContainer}>
      <div className="container">
        <nav className={Styles.contentContainer}>
          <Link href="/">
            <Image src="/headerLogo.png" alt="Logo" width={150} height={40} />
          </Link>
          <div className={Styles.navigationContainer}>
            <ul>
              <li className={Styles.active}>
                <Link href="#" className={Styles.navigationLink}>
                  About Us{" "}
                  <Image
                    src="/down_arrow.svg"
                    alt="Down arrow"
                    width={15}
                    height={15}
                    className={Styles.downArrow}
                  />
                </Link>
                <SubMenuCard variant={"SIMPLE"} />
              </li>
              <li>
                <Link href="#" className={Styles.navigationLink}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className={Styles.navigationLink}>
                  Technology{" "}
                  <Image
                    src="/down_arrow.svg"
                    alt="Down arrow"
                    width={15}
                    height={15}
                    className={Styles.downArrow}
                  />
                </Link>
                <SubMenuCard variant={"WITH_HEADING"} />
              </li>
              <li>
                <Link href="#" className={Styles.navigationLink}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className={Styles.navigationLink}>
                  <Image
                    src="/three_dots.svg"
                    alt="Three dots"
                    width={12}
                    height={12}
                  />{" "}
                  More
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.ctaContainer}>
            <Image
              src="/theme_icon.svg"
              alt="Three dots"
              width={32}
              height={32}
            />
            <CustomButton btnText="Estimate Project" onClick={() => {}} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
