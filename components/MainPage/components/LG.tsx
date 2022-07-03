import Image from 'next/image';
import React from 'react';

type LGProps = {};

const LG = ({}: LGProps) => {
  return (
    <div className={`h-screen w-full`}>
      <div className={``}>
        <Image alt={``} src={`/images/main_bg_lg_1.webp`} layout={`fill`} />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default LG;
