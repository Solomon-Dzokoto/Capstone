export const Search = ({ className, color = "#667085" }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5039 14.2377L12.2123 11.9972V11.9972L12.1586 11.9155C12.0587 11.8161 11.9221 11.7601 11.7796 11.7601C11.6371 11.7601 11.5005 11.8161 11.4007 11.9155V11.9155C9.45315 13.7022 6.45226 13.7993 4.38817 12.1425C2.32407 10.4856 1.83728 7.58889 3.25062 5.37343C4.66396 3.15796 7.53888 2.31121 9.96873 3.39474C12.3986 4.47826 13.6294 7.15584 12.8448 9.65171C12.7883 9.83202 12.8345 10.0281 12.966 10.1661C13.0975 10.3041 13.2942 10.363 13.4822 10.3207C13.6702 10.2784 13.8208 10.1412 13.8773 9.96094V9.96094C14.8151 6.99908 13.3987 3.81168 10.5442 2.46068C7.68982 1.10969 4.25405 2.00053 2.45953 4.55692C0.66501 7.11332 1.05028 10.5681 3.36612 12.6863C5.68195 14.8046 9.23335 14.9506 11.7229 13.0299L13.7519 15.0137C13.9615 15.2176 14.3003 15.2176 14.5098 15.0137C14.7192 14.8068 14.7192 14.4737 14.5098 14.2668V14.2668L14.5039 14.2377Z"
        fill={color}
      />
    </svg>
  );
};

export const Setting = ({ className, color = "#667085" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0002 12.4999C11.3809 12.4999 12.5002 11.3806 12.5002 9.99992C12.5002 8.61921 11.3809 7.49992 10.0002 7.49992C8.61945 7.49992 7.50016 8.61921 7.50016 9.99992C7.50016 11.3806 8.61945 12.4999 10.0002 12.4999Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1668 12.4999C16.0559 12.7513 16.0228 13.0301 16.0718 13.3004C16.1208 13.5707 16.2497 13.8202 16.4418 14.0166L16.4918 14.0666C16.6468 14.2214 16.7697 14.4052 16.8536 14.6075C16.9375 14.8098 16.9806 15.0267 16.9806 15.2458C16.9806 15.4648 16.9375 15.6817 16.8536 15.884C16.7697 16.0863 16.6468 16.2701 16.4918 16.4249C16.337 16.5799 16.1532 16.7028 15.9509 16.7867C15.7486 16.8706 15.5317 16.9137 15.3127 16.9137C15.0936 16.9137 14.8768 16.8706 14.6744 16.7867C14.4721 16.7028 14.2883 16.5799 14.1335 16.4249L14.0835 16.3749C13.8871 16.1828 13.6376 16.0539 13.3673 16.0049C13.097 15.9559 12.8182 15.989 12.5668 16.0999C12.3204 16.2056 12.1101 16.381 11.9621 16.6045C11.814 16.8281 11.7346 17.0901 11.7335 17.3583V17.4999C11.7335 17.9419 11.5579 18.3659 11.2453 18.6784C10.9328 18.991 10.5089 19.1666 10.0668 19.1666C9.6248 19.1666 9.20088 18.991 8.88832 18.6784C8.57576 18.3659 8.40016 17.9419 8.40016 17.4999V17.4249C8.39371 17.1491 8.30443 16.8816 8.14392 16.6572C7.98341 16.4328 7.75911 16.2618 7.50016 16.1666C7.24882 16.0557 6.97 16.0226 6.69967 16.0716C6.42934 16.1206 6.17989 16.2495 5.9835 16.4416L5.9335 16.4916C5.77871 16.6465 5.59489 16.7695 5.39256 16.8533C5.19023 16.9372 4.97335 16.9804 4.75433 16.9804C4.5353 16.9804 4.31843 16.9372 4.1161 16.8533C3.91377 16.7695 3.72995 16.6465 3.57516 16.4916C3.4202 16.3368 3.29727 16.153 3.2134 15.9507C3.12952 15.7483 3.08635 15.5314 3.08635 15.3124C3.08635 15.0934 3.12952 14.8765 3.2134 14.6742C3.29727 14.4719 3.4202 14.288 3.57516 14.1332L3.62516 14.0833C3.81728 13.8869 3.94615 13.6374 3.99517 13.3671C4.04418 13.0967 4.01109 12.8179 3.90016 12.5666C3.79453 12.3201 3.61913 12.1099 3.39555 11.9618C3.17198 11.8138 2.90998 11.7343 2.64183 11.7333H2.50016C2.05814 11.7333 1.63421 11.5577 1.32165 11.2451C1.00909 10.9325 0.833496 10.5086 0.833496 10.0666C0.833496 9.62456 1.00909 9.20063 1.32165 8.88807C1.63421 8.57551 2.05814 8.39992 2.50016 8.39992H2.57516C2.85099 8.39347 3.1185 8.30418 3.34291 8.14368C3.56732 7.98317 3.73826 7.75886 3.8335 7.49992C3.94443 7.24857 3.97752 6.96976 3.9285 6.69943C3.87948 6.4291 3.75061 6.17965 3.5585 5.98325L3.5085 5.93325C3.35354 5.77846 3.2306 5.59465 3.14673 5.39232C3.06286 5.18999 3.01968 4.97311 3.01968 4.75408C3.01968 4.53506 3.06286 4.31818 3.14673 4.11585C3.2306 3.91352 3.35354 3.72971 3.5085 3.57492C3.66328 3.41996 3.8471 3.29703 4.04943 3.21315C4.25176 3.12928 4.46864 3.08611 4.68766 3.08611C4.90669 3.08611 5.12357 3.12928 5.3259 3.21315C5.52823 3.29703 5.71204 3.41996 5.86683 3.57492L5.91683 3.62492C6.11323 3.81703 6.36268 3.94591 6.633 3.99492C6.90333 4.04394 7.18215 4.01085 7.4335 3.89992H7.50016C7.74664 3.79428 7.95684 3.61888 8.10491 3.39531C8.25297 3.17173 8.33243 2.90974 8.3335 2.64159V2.49992C8.3335 2.05789 8.50909 1.63397 8.82165 1.32141C9.13421 1.00885 9.55813 0.833252 10.0002 0.833252C10.4422 0.833252 10.8661 1.00885 11.1787 1.32141C11.4912 1.63397 11.6668 2.05789 11.6668 2.49992V2.57492C11.6679 2.84307 11.7474 3.10506 11.8954 3.32864C12.0435 3.55221 12.2537 3.72762 12.5002 3.83325C12.7515 3.94418 13.0303 3.97727 13.3007 3.92826C13.571 3.87924 13.8204 3.75037 14.0168 3.55825L14.0668 3.50825C14.2216 3.35329 14.4054 3.23036 14.6078 3.14649C14.8101 3.06261 15.027 3.01944 15.246 3.01944C15.465 3.01944 15.6819 3.06261 15.8842 3.14649C16.0866 3.23036 16.2704 3.35329 16.4252 3.50825C16.5801 3.66304 16.7031 3.84685 16.7869 4.04918C16.8708 4.25151 16.914 4.46839 16.914 4.68742C16.914 4.90644 16.8708 5.12332 16.7869 5.32565C16.7031 5.52798 16.5801 5.7118 16.4252 5.86658L16.3752 5.91658C16.183 6.11298 16.0542 6.36243 16.0052 6.63276C15.9561 6.90309 15.9892 7.1819 16.1002 7.43325V7.49992C16.2058 7.74639 16.3812 7.9566 16.6048 8.10466C16.8283 8.25272 17.0903 8.33218 17.3585 8.33325H17.5002C17.9422 8.33325 18.3661 8.50885 18.6787 8.82141C18.9912 9.13397 19.1668 9.55789 19.1668 9.99992C19.1668 10.4419 18.9912 10.8659 18.6787 11.1784C18.3661 11.491 17.9422 11.6666 17.5002 11.6666H17.4252C17.157 11.6677 16.895 11.7471 16.6714 11.8952C16.4479 12.0432 16.2725 12.2534 16.1668 12.4999Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Bell = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.108C10.5788 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42116 18.2537 9.16814 18.108C8.91513 17.9622 8.70484 17.7526 8.55833 17.5M15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const User = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6621 10.0996C15.9974 10.0996 17.0806 9.01721 17.0806 7.68193C17.0806 6.34665 15.9974 5.26422 14.6621 5.26422"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7739 12.727C16.1727 12.7545 16.5691 12.811 16.9595 12.8989C17.5018 13.005 18.1542 13.2273 18.3864 13.7139C18.5346 14.0256 18.5346 14.3884 18.3864 14.7009C18.155 15.1875 17.5018 15.409 16.9595 15.5205"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.24171 10.0996C3.90644 10.0996 2.82324 9.01721 2.82324 7.68193C2.82324 6.34665 3.90644 5.26422 5.24171 5.26422"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.1297 12.727C3.73095 12.7545 3.3345 12.811 2.94415 12.8989C2.40179 13.005 1.74943 13.2273 1.51797 13.7139C1.36901 14.0256 1.36901 14.3884 1.51797 14.7009C1.74866 15.1875 2.40179 15.409 2.94415 15.5205"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.94789 13.2477C12.6536 13.2477 14.9651 13.6571 14.9651 15.2957C14.9651 16.9334 12.6689 17.3582 9.94789 17.3582C7.24143 17.3582 4.93066 16.9487 4.93066 15.3102C4.93066 13.6716 7.22691 13.2477 9.94789 13.2477Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.94812 10.9105C8.16367 10.9105 6.73291 9.47973 6.73291 7.69452C6.73291 5.91007 8.16367 4.47931 9.94812 4.47931C11.7326 4.47931 13.1633 5.91007 13.1633 7.69452C13.1633 9.47973 11.7326 10.9105 9.94812 10.9105Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Home = ({ color = "#667085", className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.45759 1.50844L1.91442 6.03298C1.29051 6.53843 0.890572 7.60642 1.02655 8.40535L2.09039 14.8946C2.28236 16.0522 3.37019 16.9897 4.52202 16.9897H13.4807C14.6245 16.9897 15.7203 16.0441 15.9123 14.8946L16.9761 8.40535C17.1041 7.60642 16.7042 6.53843 16.0883 6.03298L10.5451 1.5166C9.68924 0.815498 8.30546 0.81549 7.45759 1.50844Z"
        stroke={color}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.00116 11.8456C10.1056 11.8456 11.0009 10.9331 11.0009 9.8075C11.0009 8.68189 10.1056 7.76941 9.00116 7.76941C7.89676 7.76941 7.00146 8.68189 7.00146 9.8075C7.00146 10.9331 7.89676 11.8456 9.00116 11.8456Z"
        stroke={color}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ArrowDown = ({ color = "#667085", className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00016 1.32306V10.6564M6.00016 10.6564L10.6668 5.98973M6.00016 10.6564L1.3335 5.98973"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Details = ({ color = "#667085", className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06016 5.99998C6.2169 5.55442 6.52626 5.17872 6.93347 4.9394C7.34067 4.70009 7.81943 4.61261 8.28495 4.69245C8.75047 4.7723 9.17271 5.01433 9.47688 5.37567C9.78106 5.737 9.94753 6.19433 9.94683 6.66665C9.94683 7.99998 7.94683 8.66665 7.94683 8.66665M8.00016 11.3333H8.00683M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998Z"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Briefcase = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66685 19.3231H13.3335C16.6835 19.3231 17.2835 17.9814 17.4585 16.3481L18.0835 9.68141C18.3085 7.64808 17.7252 5.98975 14.1668 5.98975H5.83351C2.27518 5.98975 1.69185 7.64808 1.91685 9.68141L2.54185 16.3481C2.71685 17.9814 3.31685 19.3231 6.66685 19.3231Z"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.6665 5.98977V5.3231C6.6665 3.8481 6.6665 2.65643 9.33317 2.65643H10.6665C13.3332 2.65643 13.3332 3.8481 13.3332 5.3231V5.98977"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6668 11.8231V12.6564C11.6668 12.6647 11.6668 12.6647 11.6668 12.6731C11.6668 13.5814 11.6585 14.3231 10.0002 14.3231C8.35016 14.3231 8.3335 13.5897 8.3335 12.6814V11.8231C8.3335 10.9897 8.3335 10.9897 9.16683 10.9897H10.8335C11.6668 10.9897 11.6668 10.9897 11.6668 11.8231Z"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0415 10.1564C16.1165 11.5564 13.9165 12.3898 11.6665 12.6731"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.18311 10.3814C4.05811 11.6647 6.17477 12.4397 8.3331 12.6814"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const More = ({ color = "#667085", className }) => {
  return (
    <svg
      width="4"
      height="16"
      viewBox="0 0 4 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99984 8.83331C2.46007 8.83331 2.83317 8.46022 2.83317 7.99998C2.83317 7.53974 2.46007 7.16665 1.99984 7.16665C1.5396 7.16665 1.1665 7.53974 1.1665 7.99998C1.1665 8.46022 1.5396 8.83331 1.99984 8.83331Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.99984 2.99998C2.46007 2.99998 2.83317 2.62688 2.83317 2.16665C2.83317 1.70641 2.46007 1.33331 1.99984 1.33331C1.5396 1.33331 1.1665 1.70641 1.1665 2.16665C1.1665 2.62688 1.5396 2.99998 1.99984 2.99998Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.99984 14.6666C2.46007 14.6666 2.83317 14.2935 2.83317 13.8333C2.83317 13.3731 2.46007 13 1.99984 13C1.5396 13 1.1665 13.3731 1.1665 13.8333C1.1665 14.2935 1.5396 14.6666 1.99984 14.6666Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MoreLike = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      height="21"
      className={className}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 7.60002V3.81669C18.3333 2.64169 17.8 2.16669 16.475 2.16669H13.1083C11.7833 2.16669 11.25 2.64169 11.25 3.81669V7.59169C11.25 8.77502 11.7833 9.24169 13.1083 9.24169H16.475C17.8 9.25002 18.3333 8.77502 18.3333 7.60002Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 16.975V13.6083C18.3333 12.2833 17.8 11.75 16.475 11.75H13.1083C11.7833 11.75 11.25 12.2833 11.25 13.6083V16.975C11.25 18.3 11.7833 18.8333 13.1083 18.8333H16.475C17.8 18.8333 18.3333 18.3 18.3333 16.975Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.74984 7.60002V3.81669C8.74984 2.64169 8.2165 2.16669 6.8915 2.16669H3.52484C2.19984 2.16669 1.6665 2.64169 1.6665 3.81669V7.59169C1.6665 8.77502 2.19984 9.24169 3.52484 9.24169H6.8915C8.2165 9.25002 8.74984 8.77502 8.74984 7.60002Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.74984 16.975V13.6083C8.74984 12.2833 8.2165 11.75 6.8915 11.75H3.52484C2.19984 11.75 1.6665 12.2833 1.6665 13.6083V16.975C1.6665 18.3 2.19984 18.8333 3.52484 18.8333H6.8915C8.2165 18.8333 8.74984 18.3 8.74984 16.975Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Edit = ({ color = "#667085", className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17.5H19M9 12.5H19M9 7.5H19M5.00195 17.5V17.502L5 17.502V17.5H5.00195ZM5.00195 12.5V12.502L5 12.502V12.5H5.00195ZM5.00195 7.5V7.502L5 7.50195V7.5H5.00195Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Download = ({ color = "#667085", className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.08122 10.2908L8.08122 2.26343"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0254 8.33899L8.08139 10.291L6.13739 8.33899"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5061 5.00024H12.2121C13.7521 5.00024 15 6.21235 15 7.70892L15 11.2989C15 12.7911 13.7551 14.0002 12.2189 14.0002L3.78865 14.0002C2.24865 14.0002 1 12.7874 1 11.2916L1 7.70083C1 6.20941 2.24562 5.00024 3.78108 5.00024H4.49395"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ArrowLeft = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8333M4.1665 10L9.99984 4.16667"
        stroke={color}
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Settings = ({ color = "#667085", className }) => {
  return (
    <svg
      width="20"
      className={className}
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3338 18.5531L15.884 15.9261C16.3698 15.6456 16.6122 15.5054 16.7888 15.3092C16.9451 15.1356 17.0632 14.9312 17.1354 14.7091C17.2168 14.4586 17.2168 14.1787 17.2168 13.6205V8.35865C17.2168 7.8004 17.2168 7.52054 17.1354 7.27007C17.0632 7.04794 16.9451 6.84333 16.7888 6.66975C16.6129 6.47443 16.3711 6.3348 15.8895 6.05678L11.333 3.42608C10.8473 3.14564 10.6049 3.0057 10.3467 2.95082C10.1182 2.90226 9.88202 2.90226 9.65356 2.95082C9.39536 3.0057 9.15216 3.14564 8.66642 3.42608L4.11536 6.05364C3.63019 6.33375 3.38779 6.4737 3.21126 6.66975C3.05498 6.84333 2.93695 7.04794 2.86478 7.27007C2.7832 7.52113 2.7832 7.80172 2.7832 8.3626V13.6167C2.7832 14.1776 2.7832 14.458 2.86478 14.7091C2.93695 14.9312 3.05498 15.1356 3.21126 15.3092C3.3879 15.5054 3.63047 15.6456 4.11621 15.9261L8.66642 18.5531C9.15215 18.8336 9.39536 18.9736 9.65356 19.0285C9.88202 19.077 10.1182 19.077 10.3467 19.0285C10.6049 18.9736 10.8481 18.8336 11.3338 18.5531Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 10.9896C7.5 12.3703 8.61929 13.4896 10 13.4896C11.3807 13.4896 12.5 12.3703 12.5 10.9896C12.5 9.60884 11.3807 8.48956 10 8.48956C8.61929 8.48956 7.5 9.60884 7.5 10.9896Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ChartPie = ({ color = "#667085", className }) => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2.86475C5.56497 2.86475 2.375 6.05472 2.375 9.98975C2.375 13.9248 5.56497 17.1147 9.5 17.1147C13.435 17.1147 16.625 13.9248 16.625 9.98975M9.5 2.86475C13.435 2.86475 16.625 6.05472 16.625 9.98975M9.5 2.86475V9.98975M16.625 9.98975H9.5M14.25 15.1356L9.5 9.98975"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Receipt = ({ color = "#667085", className }) => {
  return (
    <svg
      width="19"
      height="20"
      className={className}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4165 5.23973V7.15556C17.4165 8.40639 16.6248 9.19806 15.374 9.19806H12.6665V3.66431C12.6665 2.78556 13.3869 2.07306 14.2657 2.07306C15.1286 2.08098 15.9203 2.42931 16.4903 2.99931C17.0603 3.57722 17.4165 4.36889 17.4165 5.23973Z"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5835 6.03139V17.1147C1.5835 17.7718 2.32766 18.1439 2.85016 17.7481L4.20391 16.7347C4.52058 16.4972 4.96391 16.5289 5.24891 16.8139L6.56308 18.136C6.87183 18.4447 7.3785 18.4447 7.68725 18.136L9.01725 16.806C9.29433 16.5289 9.73766 16.4972 10.0464 16.7347L11.4002 17.7481C11.9227 18.136 12.6668 17.7639 12.6668 17.1147V3.65639C12.6668 2.78556 13.3793 2.07306 14.2502 2.07306H5.54183H4.75016C2.37516 2.07306 1.5835 3.49014 1.5835 5.23973V6.03139Z"
        stroke={color}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.125 10.7893H9.5"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.125 7.62268H9.5"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.74658 10.7814H4.75369"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.74658 7.61475H4.75369"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Avatar = ({ color = "#667085", className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="10"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="1 3"
      />
      <path
        d="M12.0002 7.33331V16.6666M7.3335 12H16.6668"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Filter = ({ color = "#344054", className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
        stroke={color}
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
