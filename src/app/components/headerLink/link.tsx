import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import classNames from "classnames";
type HeaderLinkProps = {
  pathName: string;
  label: string;
};

const HeaderLink = ({ pathName, label }: HeaderLinkProps) => {
  const currentPath = usePathname();
  return (
    <Link
      prefetch={false}
      href={pathName}
      className={classNames(styles.navLink, {
        [styles.selected]: currentPath === pathName,
      })}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;
