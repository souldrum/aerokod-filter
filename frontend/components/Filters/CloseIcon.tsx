export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 30,
  height = 30,
  fill = "#444444",
  className,
  onClick,
}) => {
  return (
    <svg
      className={className ? className : ""}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect
        width={width}
        height={height}
        rx="15"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M10.5 20.625L9.375 19.5L13.875 15L9.375 10.5L10.5 9.375L15 13.875L19.5 9.375L20.625 10.5L16.125 15L20.625 19.5L19.5 20.625L15 16.125L10.5 20.625Z"
        fill="white"
      />
    </svg>
  );
};
