import Link from 'next/link';
import React from 'react';

type Props = {
  comments: IComments[];
  products: IProduct[];
};

const LG = ({ comments, products }: Props) => {
  return (
    <div className={`flex flex-col ml-[calc((100%-1278px)/2)]`}>
      <div>Ваши отзывы</div>
      <div className={`flex`}>
        {comments.map((comment, i) => {
          if (i === 2)
            return (
              <div key={`allcomments`} className={`mt-auto`}>
                <div className={``}>Еще отзывы</div>
              </div>
            );
          if (i > 2) return null;
          return (
            <div key={`comment${i}`} className={`w-1/3`}>
              <div>{comment.autor}</div>
              <div>{comment.text}</div>
              <div>{products.find(({ id }) => id === comment.product)?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LG;
