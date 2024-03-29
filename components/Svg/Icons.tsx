interface IIcon
  extends React.FC<{
    className?: string;
    color?: string;
    onClick?: () => void;
    w?: string;
    h?: string;
  }> {}

export const Menu: IIcon = (props) => (
  <svg
    width={props.w || '20'}
    height={props.h || '8'}
    viewBox='0 0 20 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 6.5C0.723858 6.5 0.5 6.72386 0.5 7C0.5 7.27614 0.723858 7.5 1 7.5V6.5ZM11.3708 7.5C11.6469 7.5 11.8708 7.27614 11.8708 7C11.8708 6.72386 11.6469 6.5 11.3708 6.5V7.5ZM1 7.5H11.3708V6.5H1V7.5Z'
      fill={props.color || 'black'}
    />
    <path
      d='M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5V0.5ZM19 1.5C19.2761 1.5 19.5 1.27614 19.5 1C19.5 0.723858 19.2761 0.5 19 0.5V1.5ZM1 1.5H19V0.5H1V1.5Z'
      fill={props.color || 'black'}
    />
  </svg>
);

export const Cart: IIcon = (props) => (
  <svg
    width={props.w || '18'}
    height={props.h || '20'}
    viewBox='0 0 18 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M16 19V19.5V19ZM2 19V18.5V19ZM1 18H0.500001H1ZM1 8H1.5H1ZM2 7L2 7.5L2 7ZM16 7V7.5V7ZM17 8L16.5 8L17 8ZM17 18H17.5H17ZM16 18.5L2 18.5V19.5L16 19.5V18.5ZM1.5 18L1.5 8H0.5L0.500001 18H1.5ZM2 7.5L16 7.5V6.5L2 6.5L2 7.5ZM16.5 8L16.5 18H17.5L17.5 8L16.5 8ZM16 7.5C16.2761 7.5 16.5 7.72386 16.5 8L17.5 8C17.5 7.17157 16.8284 6.5 16 6.5V7.5ZM1.5 8C1.5 7.72386 1.72386 7.5 2 7.5L2 6.5C1.17157 6.5 0.5 7.17157 0.5 8H1.5ZM2 18.5C1.72386 18.5 1.5 18.2761 1.5 18H0.500001C0.500001 18.8284 1.17157 19.5 2 19.5V18.5ZM16 19.5C16.8284 19.5 17.5 18.8284 17.5 18H16.5C16.5 18.2761 16.2761 18.5 16 18.5V19.5Z'
      fill={props.color || 'black'}
    />
    <path
      d='M11.7692 7V6.5V7ZM6.23077 7L6.23077 7.5H6.23077L6.23077 7ZM6 6.76923H5.5H6ZM6 4H6.5H6ZM12 4H11.5H12ZM12 6.76923H12.5H12ZM9 1V1.5V1ZM11.7692 6.5L6.23077 6.5L6.23077 7.5L11.7692 7.5V6.5ZM6.5 6.76923L6.5 4H5.5L5.5 6.76923H6.5ZM11.5 4L11.5 6.76923H12.5L12.5 4H11.5ZM9 1.5C10.3807 1.5 11.5 2.61929 11.5 4H12.5C12.5 2.067 10.933 0.5 9 0.5V1.5ZM6.5 4C6.5 2.61929 7.61929 1.5 9 1.5V0.5C7.067 0.5 5.5 2.067 5.5 4H6.5ZM6.23077 6.5C6.37946 6.5 6.5 6.62054 6.5 6.76923H5.5C5.5 7.17282 5.82717 7.5 6.23077 7.5L6.23077 6.5ZM11.7692 7.5C12.1728 7.5 12.5 7.17283 12.5 6.76923H11.5C11.5 6.62054 11.6205 6.5 11.7692 6.5V7.5Z'
      fill={props.color || 'black'}
    />
  </svg>
);

export const Close: IIcon = (props) => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.375 1L13 13' stroke={props.color || 'black'} strokeLinecap='round' />
    <path d='M12.625 1L1 13' stroke={props.color || 'black'} strokeLinecap='round' />
  </svg>
);

export const Minus: IIcon = (props) => (
  <svg width='13' height='3' viewBox='0 0 13 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.5 1.5H11.5' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
export const Plus: IIcon = (props) => (
  <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.5 6.5H11.5' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.5 11.5L6.5 1.5' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export const Instagram: IIcon = (props) => (
  <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width='38' height='38' rx='19' fill='black' />
    <path
      d='M19.3782 17.2257C18.192 17.2257 17.224 18.1937 17.224 19.3799C17.224 20.5661 18.192 21.5342 19.3782 21.5342C20.5644 21.5342 21.5324 20.5661 21.5324 19.3799C21.5324 18.1937 20.5644 17.2257 19.3782 17.2257ZM25.8392 19.3799C25.8392 18.4878 25.8473 17.6038 25.7972 16.7134C25.7471 15.6791 25.5111 14.7611 24.7548 14.0048C23.9969 13.2469 23.0806 13.0125 22.0463 12.9624C21.1542 12.9123 20.2703 12.9204 19.3798 12.9204C18.4877 12.9204 17.6037 12.9123 16.7133 12.9624C15.679 13.0125 14.7611 13.2485 14.0048 14.0048C13.2468 14.7627 13.0125 15.6791 12.9624 16.7134C12.9123 17.6055 12.9204 18.4895 12.9204 19.3799C12.9204 20.2704 12.9123 21.156 12.9624 22.0465C13.0125 23.0808 13.2485 23.9987 14.0048 24.755C14.7627 25.513 15.679 25.7473 16.7133 25.7974C17.6054 25.8475 18.4894 25.8394 19.3798 25.8394C20.2719 25.8394 21.1559 25.8475 22.0463 25.7974C23.0806 25.7473 23.9985 25.5114 24.7548 24.755C25.5128 23.9971 25.7471 23.0808 25.7972 22.0465C25.8489 21.156 25.8392 20.272 25.8392 19.3799V19.3799ZM19.3782 22.6945C17.544 22.6945 16.0636 21.2142 16.0636 19.3799C16.0636 17.5457 17.544 16.0653 19.3782 16.0653C21.2124 16.0653 22.6927 17.5457 22.6927 19.3799C22.6927 21.2142 21.2124 22.6945 19.3782 22.6945ZM22.8285 16.7037C22.4002 16.7037 22.0544 16.3578 22.0544 15.9296C22.0544 15.5013 22.4002 15.1555 22.8285 15.1555C23.2567 15.1555 23.6026 15.5013 23.6026 15.9296C23.6027 16.0313 23.5828 16.132 23.5439 16.226C23.5051 16.3199 23.448 16.4053 23.3761 16.4772C23.3042 16.5491 23.2188 16.6062 23.1249 16.645C23.0309 16.6839 22.9302 16.7038 22.8285 16.7037V16.7037Z'
      fill='white'
    />
  </svg>
);

export const Telegram: IIcon = (props) => (
  <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width='38' height='38' rx='19' fill='black' />
    <g clipPath='url(#clip0_360_2369)'>
      <path
        d='M25.5796 12.706L12.1048 17.9021C11.1852 18.2714 11.1906 18.7844 11.9361 19.0132L15.3956 20.0924L23.4 15.0422C23.7784 14.8119 24.1242 14.9358 23.84 15.1881L17.3549 21.0409H17.3534L17.3549 21.0416L17.1163 24.6076C17.4659 24.6076 17.6202 24.4472 17.8162 24.258L19.4966 22.624L22.9918 25.2057C23.6363 25.5606 24.0992 25.3782 24.2595 24.6091L26.554 13.7958C26.7888 12.8542 26.1945 12.4278 25.5796 12.706V12.706Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_360_2369'>
        <rect width='15.2' height='15.2' fill='white' transform='translate(11.4004 11.4004)' />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowLeft: IIcon = (props) => (
  <svg width='23' height='9' viewBox='0 0 23 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.896446 4.85356C0.701185 4.65829 0.701185 4.34171 0.896446 4.14645L4.07843 0.964468C4.27369 0.769205 4.59027 0.769205 4.78553 0.964468C4.9808 1.15973 4.9808 1.47631 4.78553 1.67157L1.95711 4.5L4.78553 7.32843C4.9808 7.52369 4.9808 7.84027 4.78553 8.03554C4.59027 8.2308 4.27369 8.2308 4.07843 8.03554L0.896446 4.85356ZM22.25 5L1.25 5L1.25 4L22.25 4L22.25 5Z'
      fill='black'
    />
  </svg>
);

export const ArrowRight: IIcon = (props) => (
  <svg width='22' height='9' viewBox='0 0 22 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.6036 4.85356C21.7988 4.65829 21.7988 4.34171 21.6036 4.14645L18.4216 0.964468C18.2263 0.769205 17.9097 0.769205 17.7145 0.964468C17.5192 1.15973 17.5192 1.47631 17.7145 1.67157L20.5429 4.5L17.7145 7.32843C17.5192 7.52369 17.5192 7.84027 17.7145 8.03554C17.9097 8.2308 18.2263 8.2308 18.4216 8.03554L21.6036 4.85356ZM0.25 5L21.25 5L21.25 4L0.25 4L0.25 5Z'
      fill='black'
    />
  </svg>
);

export const SocialIcons: { [key: string]: IIcon } = {
  Instagram,
  Telegram,
};
