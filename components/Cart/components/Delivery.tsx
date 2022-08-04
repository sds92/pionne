import React from 'react';
import { UI } from 'components';

type Props = {
  data: {
    title: string;
    items: string[][];
  };
};

const Delivery = ({ data }: Props) => {
  const [isActive, setIsActive] = React.useState<number>(0);
  return (
    <div>
      <UI.SectionTitle>{data.title}</UI.SectionTitle>
      <div className={`text-[12px]`}>
        {data.items.map(([title, description], i) => {
          return (
            <div key={`delivery${i}`} className={`flex flex-col`}
            onClick={() => setIsActive(i)}
            >
              <div className={`flex items-center`}>
                <div
                  className={`rounded-full w-[13px] h-[13px] flex-none border border-black mr-[8px] ${isActive === i && 'bg-black'}`}
                ></div>
                <div>{title}</div>
              </div>
              {isActive === i && <div className={`pointer-events-none`}>{description}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Delivery;
