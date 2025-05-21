import { ReactElement, JSX } from 'react';

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaGraduationCap: IconType;
  export const FaAward: IconType;
  export const FaCalendarAlt: IconType;
  export const FaBriefcase: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaGlobe: IconType;
}

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = (props: IconBaseProps) => JSX.Element;
} 