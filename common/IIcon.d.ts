interface IIcons
  extends React.FC<{
    className?: string;
    color?: string;
    fill?: string;
    svgOpacity?: number;
    onClick?: (event: MouseEventHandler<SVGSVGElement>) => void;
    w?: string;
    h?: string;
    style?: React.CSSProperties;
  }> {}
