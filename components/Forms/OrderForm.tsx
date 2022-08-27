import { UI } from 'components';
import React from 'react';
import { CART_PAGE } from 'configs/pageData';
import styles from './Forms.module.css';

type Props = {
  data: {
    agreement: {
      title: string;
      link: string;
    };
    title: string;
    items: string[][];
  };
};

const OrderForm = ({ data }: Props) => {
  const initData: { [key: string]: string } = {};
  data.items.forEach(([name, type, placeholder, error]) => {
    initData[name] = '';
  });

  const [formData, setFormData] = React.useState(initData);
  const [agreement, setAgreement] = React.useState(false);

  return (
    <>
      <div className={`flex items-start`}>
        <div
          className={`w-[13px] h-[13px] mr-[8px] flex-none rounded-[2px] border border-black flex items-center justify-center`}
          onClick={() => setAgreement(!agreement)}
        >
          {agreement && <div className={`w-full h-full bg-black `}></div>}
        </div>
        <div className={`${styles.agreement_title}`}>{CART_PAGE.orderForm.agreement.title}</div>
      </div>
      <form>
        <UI.SectionTitle>{data.title}</UI.SectionTitle>
        {data.items.map(([name, type, placeholder, error], i) => {
          return (
            <div key={`input${i}`} className={`w-full h-[46px] border border-[#A9A9A9] mb-[13px]`}>
              <UI.InputWrapper>
                <input
                  className={`h-full w-full px-1`}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={(e) => setFormData((s) => ({ ...s, [name]: e.target.value }))}
                />
              </UI.InputWrapper>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default OrderForm;
