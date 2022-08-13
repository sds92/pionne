import MobileSlider from 'components/Slider/MobileSlider';
import React from 'react';
import styles from '../../../Products.module.css';

type Props = {
  comments: IComments[]
};

const SM = ({comments}: Props) => {
  return (
    <div className={`relative w-full my-4 px-4`}>
      <div className={`w-full flex flex-col z-10 py-10`}>
        <div className={`${styles.comments_title} mb-[27px] w-full`}>Ваши отзывы</div>
        {(
          <MobileSlider>
            {comments?.map((comment, i) => {
              return (
                <div className={`w-screen`} key={`comment${i}`}>
                  <div className={`${styles.comments_autor} py-2`}>{comment.autor}</div>
                  <div className={`${styles.comments_text} py-1`}>{comment.text}</div>
                </div>
              );
            })}
          </MobileSlider>
        )}
      </div>
    </div>
  );
};

export default SM;
