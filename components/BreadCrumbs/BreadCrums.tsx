import Link from 'next/link';
import React from 'react';
import styles from './BreadCrumbs.module.css'

type BreadCrumsProps = {
  data: string[][];
};

const BreadCrums = ({ data }: BreadCrumsProps) => {
  return (
    <div className={`flex`}>
      {data.map(([title, href], i) => {
        return (
          <React.Fragment key={`link${i}`}>
            <Link href={href}>
              <div className={`${styles.link} cursor-pointer uppercase whitespace-nowrap`}>{title}</div>
            </Link>
            {i !== data.length - 1 && <div className={`${styles.link} uppercase `}> &nbsp;{'/'}&nbsp;</div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrums;
