import React from 'react';
import styles from './UI.module.css';

type Props = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <div className={`${styles.section_title} uppercase px-[16px] w-full text-center py-[10px]`}>
      {children && children}
    </div>
  );
};

export default SectionTitle;
