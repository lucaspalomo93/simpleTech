import { SVGProps } from 'react';

interface SvgRendererProps {
  pathProps: SVGProps<SVGPathElement>;
}

const SvgRenderer: React.FC<SvgRendererProps> = ({ pathProps, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
    <path {...pathProps} />
  </svg>
);
export default SvgRenderer;
