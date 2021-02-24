const Hamburger = ({ width = 30, height = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="30" y2="1" stroke="black" strokeWidth="2" />
      <line y1="9" x2="30" y2="9" stroke="black" strokeWidth="2" />
      <line y1="17" x2="30" y2="17" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default Hamburger;
