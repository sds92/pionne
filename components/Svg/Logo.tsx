const Logo: React.FC<{
  className?: string;
//   color?: string;
  onClick?: () => void;
  w?: string;
  h?: string;
}> = (props) => (
  <svg width={props.w || '86'} height={props.h || '33'} viewBox='0 0 86 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M43.1856 22.6849H39.6454C39.6454 22.5177 39.6454 22.3675 39.6454 22.2173C39.7025 18.9178 39.7782 15.6182 39.8067 12.3186C39.8167 11.1569 39.6355 10.0079 39.0304 8.97937C38.7954 8.62466 38.54 8.28361 38.2656 7.95791L41.7416 6.22949V8.92129L41.8343 8.96804C41.9385 8.84903 42.0384 8.72861 42.1454 8.61385C43.7022 6.94211 45.6028 6.07648 47.9187 6.26491C49.7052 6.40658 50.8467 7.37705 51.3889 9.12105C51.7571 10.3026 51.817 11.521 51.8284 12.7436C51.8413 14.38 51.8113 16.0177 51.8555 17.654C51.8926 19.0339 52.0696 20.4011 52.6232 21.6861C52.7891 22.0258 52.9725 22.3568 53.1726 22.6778H49.7166C49.7166 22.5276 49.7166 22.3774 49.7166 22.2273C49.7751 18.9688 49.8379 15.7103 49.8878 12.4518C49.9241 11.4495 49.7741 10.4491 49.4455 9.50073C48.966 8.19309 48.0186 7.4833 46.6302 7.36288C44.6839 7.19146 43.1528 8.00891 41.8757 9.39164C41.7941 9.50538 41.7539 9.64325 41.7616 9.78266C41.7616 12.5368 41.7487 15.2909 41.7929 18.0451C41.8129 19.2946 42.0084 20.5314 42.5649 21.6776C42.7319 22.0232 42.9659 22.3363 43.187 22.6948'
      fill='black'
    />
    <path
      d='M57.2738 6.23775V8.84312C57.5692 8.60228 57.9159 8.33451 58.2455 8.04691C59.7338 6.75627 61.4447 6.09891 63.4352 6.26608C65.2403 6.41767 66.4218 7.4193 66.9426 9.18455C67.2879 10.3576 67.3435 11.5604 67.3521 12.7703C67.3635 14.5766 67.3621 16.383 67.422 18.1865C67.4433 19.3452 67.6743 20.4907 68.1041 21.5682C68.2625 21.9465 68.4908 22.2964 68.692 22.6719H65.2403C65.2403 22.5047 65.2403 22.3276 65.2403 22.1505C65.3059 18.9175 65.383 15.6831 65.4286 12.4487C65.4661 11.4332 65.3092 10.4198 64.9663 9.46224C64.4583 8.12484 63.4638 7.44339 62.0468 7.34988C60.1448 7.22379 58.6565 8.04267 57.4065 9.38431C57.3266 9.48253 57.2832 9.60514 57.2838 9.73141C57.3009 12.6669 57.2924 15.6038 57.3666 18.5378C57.398 19.7987 57.6619 21.0398 58.354 22.1434C58.4639 22.3177 58.5994 22.4764 58.7464 22.6761H55.1634C55.1634 22.5515 55.1634 22.414 55.1634 22.278C55.2276 19.2646 55.2961 16.2512 55.3532 13.2378C55.3775 11.9741 55.3432 10.7047 54.821 9.5274C54.5784 8.98054 54.1988 8.4946 53.8535 7.93641L57.2781 6.23633'
      fill='black'
    />
    <path
      d='M5.0056 22.6889H0C0.126995 22.4637 0.24685 22.2639 0.351015 22.067C0.988463 20.8225 1.33016 19.4494 1.34985 18.0534C1.42691 13.8844 1.45021 9.71494 1.41977 5.54501C1.40693 3.85485 1.13439 2.17885 0.351015 0.63603C0.252558 0.441937 0.134117 0.257763 0.0042675 0.0310859C0.13697 0.0183353 0.232578 0.0027495 0.329608 0.0027495C2.98937 0.0027495 5.64771 -0.0114184 8.30605 0.0154996C9.8571 0.0325004 11.3925 0.195428 12.8365 0.820208C14.3633 1.48041 15.0553 2.59112 14.8884 4.17362C14.7728 5.26167 14.125 6.07204 13.3045 6.72374C12.5678 7.30678 11.8005 7.85063 11.0058 8.35298C9.57885 9.26253 8.19475 10.2132 7.06891 11.4882C5.22962 13.5722 4.14659 15.9651 4.08952 18.7632C4.05373 19.9621 4.29792 21.153 4.80297 22.2426C4.8629 22.3702 4.91855 22.5005 4.99989 22.6847L5.0056 22.6889ZM1.51967 20.7012L1.57816 20.7225C1.9306 19.82 2.26879 18.9091 2.64122 18.0151C3.85409 15.1108 5.39087 12.4148 7.74955 10.2486C8.48869 9.56996 9.22641 8.8871 9.93416 8.17448C10.8374 7.26493 11.6593 6.28739 12.1587 5.08883C12.9678 3.14649 12.24 1.48891 10.2481 0.78479C8.90442 0.325864 7.47236 0.18043 6.06295 0.359769C4.15945 0.573696 3.45455 1.25089 3.24194 3.14365C2.98367 5.44018 2.83956 7.74804 2.62409 10.0488C2.3858 12.5989 2.12895 15.1406 1.86925 17.685C1.76651 18.6909 1.6381 19.6939 1.51967 20.6984'
      fill='black'
    />
    <path
      d='M37.6007 14.6186C37.6107 18.6832 34.8296 22.0848 30.9869 22.8144C27.4839 23.4774 23.8681 21.7178 22.1187 18.4962C21.2708 16.9498 20.9322 15.1785 21.1505 13.4312C21.3688 11.684 22.1331 10.0485 23.3358 8.75472C26.0598 5.81924 30.7558 5.38856 33.9949 7.78142C36.335 9.51267 37.5136 11.8375 37.6007 14.6186ZM23.1717 13.0446C23.1446 15.0918 23.8666 17.3359 25.2051 19.2414C26.1297 20.5575 27.2912 21.5946 28.8423 22.1542C30.8128 22.8626 32.8862 22.276 34.1361 20.6142C35.0522 19.3958 35.4203 17.9862 35.4888 16.4929C35.583 14.3097 34.9623 12.3065 33.8136 10.4661C32.8505 8.9219 31.6048 7.67233 29.834 7.02914C27.882 6.32077 25.8215 6.90021 24.5673 8.54363C23.5527 9.87252 23.226 11.4182 23.1717 13.0446Z'
      fill='black'
    />
    <path
      d='M20.4279 22.6863H16.8035C16.8035 22.5446 16.8035 22.4029 16.8035 22.2698C16.8682 19.2549 16.9319 16.2406 16.9947 13.2267C17.019 12.0282 16.9947 10.8183 16.5267 9.69766C16.3026 9.1593 15.906 8.69177 15.5863 8.19308C15.545 8.12933 15.4964 8.07125 15.418 7.96499L18.9168 6.22949V6.75652C18.9168 10.1085 18.8854 13.4619 18.9339 16.8153C18.9758 18.0074 19.0979 19.1954 19.2992 20.3713C19.4246 21.2409 19.819 22.0503 20.4279 22.6877'
      fill='black'
    />
    <path
      d='M19.1451 2.52098C19.1489 2.74272 19.1079 2.96298 19.0246 3.16874C18.9413 3.37451 18.8173 3.56162 18.66 3.71903C18.5026 3.87644 18.3151 4.00096 18.1085 4.08524C17.9019 4.16952 17.6804 4.21185 17.457 4.20973C17.231 4.2116 17.0068 4.16901 16.7974 4.08441C16.588 3.99981 16.3975 3.87488 16.237 3.71683C16.0765 3.55878 15.9491 3.37073 15.8622 3.16353C15.7752 2.95634 15.7305 2.73411 15.7305 2.50965C15.7398 2.05602 15.9277 1.62406 16.2539 1.30629C16.58 0.988522 17.0186 0.810217 17.4756 0.80957C17.926 0.817767 18.3547 1.00301 18.6676 1.32465C18.9806 1.64629 19.1523 2.07806 19.1451 2.52523'
      fill='black'
    />
    <path
      d='M72.3068 15.1544C72.772 14.6387 73.2072 14.0919 73.7095 13.6144C74.9081 12.4726 76.3379 11.6877 77.8475 11.0162C78.7174 10.6207 79.5555 10.1599 80.3546 9.63767C80.8769 9.30191 81.1951 8.77488 81.0467 8.09343C80.9197 7.50691 80.4959 7.17114 79.9765 6.98697C77.8718 6.24035 75.8898 6.48402 74.1775 7.94043C72.1913 9.62917 71.5349 11.8846 71.6533 14.4022C71.8074 17.7031 73.905 20.1697 77.174 20.7576C80.2961 21.3243 84.1873 20.0493 85.6028 16.3657C85.7455 15.9804 85.8511 15.5752 85.9995 15.0978C85.9524 16.489 85.6185 17.723 84.935 18.8351C83.1057 21.8103 80.406 23.227 76.9029 22.9762C73.0717 22.6929 70.0252 19.7376 69.5315 15.9379C69.0635 12.3536 70.6088 9.11773 73.748 7.3709C76.2765 5.96408 78.9263 5.84366 81.5746 7.06913C82.0959 7.3152 82.5552 7.67389 82.9188 8.11893C83.6237 8.99306 83.4239 10.125 82.5421 10.8631C81.6602 11.6013 80.5672 11.9257 79.4728 12.2119C78.4953 12.4683 77.5079 12.6879 76.5419 12.9741C75.0037 13.4303 73.5754 14.1075 72.4196 15.2508L72.3025 15.1573'
      fill='black'
    />
    <path
      d='M19.1602 32.638L19.3128 32.3178C19.5818 32.5355 19.919 32.6528 20.266 32.6493C20.764 32.6493 20.9795 32.4581 20.9795 32.2073C20.9795 31.5074 19.2301 31.9495 19.2301 30.8855C19.2301 30.4435 19.5768 30.0666 20.3359 30.0666C20.6632 30.0614 20.985 30.1494 21.2634 30.3202L21.1279 30.6475C20.8909 30.4981 20.6166 30.4176 20.3359 30.4151C19.8451 30.4151 19.6353 30.6191 19.6353 30.8685C19.6353 31.5698 21.3833 31.1306 21.3833 32.1832C21.3833 32.621 21.028 32.9978 20.266 32.9978C19.8664 33.0098 19.4752 32.8824 19.1602 32.638Z'
      fill='black'
    />
    <path
      d='M22.9267 31.693L22.3987 32.2243V32.9652H21.9863V30.1006H22.3987V31.7001L23.9655 30.1006H24.4363L23.2021 31.3898L24.5134 32.9652H24.0311L22.9267 31.693Z'
      fill='black'
    />
    <path d='M25.3616 30.1006H24.9492V32.9666H25.3616V30.1006Z' fill='black' />
    <path
      d='M28.7113 30.1006V32.9652H28.3732L26.6409 30.8288V32.9652H26.2285V30.1006H26.5667L28.299 32.237V30.1006H28.7113Z'
      fill='black'
    />
    <path
      d='M30.4512 31.5329C30.4512 30.6828 31.1033 30.0665 31.9808 30.0665C32.1853 30.0585 32.389 30.0942 32.5784 30.1712C32.7677 30.2482 32.9381 30.3647 33.0781 30.5128L32.8099 30.7707C32.7067 30.6599 32.5808 30.5723 32.4408 30.5137C32.3008 30.4551 32.1498 30.4268 31.9979 30.4306C31.8495 30.4248 31.7013 30.4492 31.5627 30.5022C31.424 30.5552 31.2977 30.6358 31.1915 30.739C31.0853 30.8422 31.0014 30.9658 30.945 31.1023C30.8886 31.2389 30.8609 31.3853 30.8636 31.5329C30.8609 31.6803 30.8886 31.8268 30.945 31.9632C31.0014 32.0996 31.0853 32.2232 31.1916 32.3263C31.2978 32.4293 31.4241 32.5098 31.5628 32.5626C31.7014 32.6155 31.8495 32.6397 31.9979 32.6337C32.1501 32.6367 32.3012 32.6076 32.4412 32.5483C32.5812 32.4889 32.7069 32.4007 32.8099 32.2894L33.0781 32.5473C32.9377 32.6963 32.7667 32.8137 32.5767 32.8915C32.3866 32.9692 32.1819 33.0055 31.9765 32.9978C31.1033 32.9978 30.4512 32.3801 30.4512 31.5329Z'
      fill='black'
    />
    <path
      d='M35.4365 32.2488H33.9025L33.5843 32.9657H33.1562L34.4633 30.0996H34.8714L36.1827 32.9657H35.7547L35.4365 32.2488ZM35.2938 31.9215L34.6702 30.5175L34.0481 31.9215H35.2938Z'
      fill='black'
    />
    <path
      d='M38.5458 32.9657L37.9223 32.0859C37.8652 32.0859 37.8024 32.0859 37.7411 32.0859H37.0276V32.9586H36.6152V30.0996H37.7411C38.4916 30.0996 38.9454 30.4765 38.9454 31.0984C38.9548 31.2977 38.8976 31.4945 38.7828 31.6582C38.668 31.8219 38.5019 31.9434 38.3104 32.0037L38.9953 32.9657H38.5458ZM38.533 31.0984C38.533 30.689 38.2562 30.4566 37.7282 30.4566H37.0276V31.7459H37.7282C38.2562 31.7459 38.533 31.5078 38.533 31.0984Z'
      fill='black'
    />
    <path
      d='M41.708 32.6096V32.9652H39.6133V30.1006H41.6509V30.4562H40.0257V31.336H41.474V31.6845H40.0257V32.6096H41.708Z'
      fill='black'
    />
    <path
      d='M45.8145 31.0984C45.8145 31.7204 45.3608 32.0901 44.6102 32.0901H43.8967V32.9586H43.4844V30.0996H44.6102C45.3608 30.0996 45.8145 30.4765 45.8145 31.0984ZM45.4021 31.0984C45.4021 30.689 45.1253 30.4566 44.5988 30.4566H43.8967V31.7388H44.5988C45.1253 31.7388 45.4021 31.505 45.4021 31.0956'
      fill='black'
    />
    <path
      d='M48.3491 32.9657L47.727 32.0859C47.6685 32.0859 47.6071 32.0859 47.5458 32.0859H46.8323V32.9586H46.4199V30.0996H47.5458C48.2963 30.0996 48.7501 30.4765 48.7501 31.0984C48.7595 31.2977 48.7023 31.4945 48.5875 31.6582C48.4727 31.8219 48.3066 31.9434 48.1151 32.0037L48.7986 32.9657H48.3491ZM48.3377 31.0984C48.3377 30.689 48.0609 30.4566 47.5329 30.4566H46.8323V31.7459H47.5329C48.0609 31.7459 48.3377 31.5078 48.3377 31.0984Z'
      fill='black'
    />
    <path
      d='M49.1836 31.5337C49.1836 30.6936 49.8343 30.0674 50.7218 30.0674C51.6093 30.0674 52.2515 30.6893 52.2515 31.5337C52.2515 32.3781 51.5994 32.9986 50.7218 32.9986C49.8442 32.9986 49.1836 32.3724 49.1836 31.5337ZM51.8391 31.5337C51.8426 31.3874 51.8161 31.2419 51.7611 31.1061C51.7062 30.9703 51.6239 30.8471 51.5193 30.7439C51.4147 30.6408 51.2901 30.5598 51.153 30.5061C51.0158 30.4524 50.8691 30.427 50.7218 30.4315C50.5738 30.426 50.4263 30.4507 50.2882 30.504C50.1502 30.5572 50.0246 30.6379 49.9191 30.7412C49.8137 30.8444 49.7306 30.968 49.675 31.1043C49.6195 31.2406 49.5926 31.3867 49.596 31.5337C49.5928 31.6806 49.6198 31.8266 49.6755 31.9627C49.7311 32.0988 49.8142 32.2222 49.9197 32.3253C50.0251 32.4284 50.1506 32.509 50.2886 32.5621C50.4265 32.6153 50.5739 32.6399 50.7218 32.6345C50.869 32.639 51.0156 32.6136 51.1526 32.56C51.2896 32.5063 51.4142 32.4256 51.5188 32.3226C51.6233 32.2196 51.7056 32.0965 51.7607 31.9609C51.8158 31.8252 51.8424 31.6799 51.8391 31.5337Z'
      fill='black'
    />
    <path
      d='M52.8809 30.0996H54.0966C55.0255 30.0996 55.6562 30.6805 55.6562 31.5333C55.6562 32.3862 55.0255 32.9657 54.0966 32.9657H52.8809V30.0996ZM54.0723 32.6101C54.7858 32.6101 55.2438 32.1751 55.2438 31.5333C55.2438 30.8916 54.7858 30.4566 54.0723 30.4566H53.2932V32.6101H54.0723Z'
      fill='black'
    />
    <path
      d='M56.2617 31.7289V30.0996H56.6741V31.7133C56.6741 32.348 56.968 32.6342 57.4874 32.6342C58.0068 32.6342 58.3036 32.3508 58.3036 31.7133V30.0996H58.7032V31.7289C58.7032 32.5605 58.2451 33.0039 57.4832 33.0039C56.7212 33.0039 56.2617 32.5661 56.2617 31.7289Z'
      fill='black'
    />
    <path
      d='M59.3145 31.5329C59.3145 30.6828 59.9651 30.0665 60.8441 30.0665C61.0485 30.0585 61.2523 30.0942 61.4416 30.1712C61.631 30.2482 61.8014 30.3647 61.9414 30.5128L61.6731 30.7707C61.5698 30.6598 61.4437 30.572 61.3035 30.5134C61.1632 30.4548 61.0119 30.4266 60.8598 30.4306C60.7114 30.4248 60.5633 30.4492 60.4247 30.5022C60.2861 30.5553 60.1599 30.6359 60.0538 30.7391C59.9477 30.8423 59.864 30.9659 59.8078 31.1024C59.7515 31.2389 59.724 31.3854 59.7268 31.5329C59.7242 31.6802 59.7519 31.8265 59.8082 31.9628C59.8645 32.0992 59.9483 32.2227 60.0543 32.3257C60.1604 32.4288 60.2866 32.5093 60.4251 32.5622C60.5636 32.6152 60.7115 32.6395 60.8598 32.6337C61.0122 32.6369 61.1636 32.6079 61.3038 32.5486C61.4441 32.4892 61.57 32.4009 61.6731 32.2894L61.9414 32.5473C61.801 32.6963 61.63 32.8137 61.44 32.8915C61.2499 32.9692 61.0452 33.0055 60.8398 32.9978C59.9651 32.9978 59.3145 32.3801 59.3145 31.5329Z'
      fill='black'
    />
    <path
      d='M63.0689 30.4562H62.0801V30.1006H64.4673V30.4562H63.4785V32.9652H63.0689V30.4562Z'
      fill='black'
    />
    <path
      d='M64.617 32.638L64.7697 32.3178C65.0381 32.5355 65.3749 32.6528 65.7215 32.6493C66.2209 32.6493 66.4349 32.4581 66.4349 32.2073C66.4349 31.5074 64.6869 31.9495 64.6869 30.8855C64.6869 30.4435 65.0337 30.0666 65.7928 30.0666C66.12 30.0614 66.4419 30.1494 66.7203 30.3202L66.5776 30.6475C66.3413 30.498 66.0673 30.4174 65.7871 30.4151C65.2962 30.4151 65.0851 30.6191 65.0851 30.8685C65.0851 31.5698 66.8345 31.1306 66.8345 32.1832C66.8345 32.621 66.4792 32.9978 65.7158 32.9978C65.3166 33.0094 64.9259 32.8821 64.6113 32.638'
      fill='black'
    />
  </svg>
);

export default Logo;