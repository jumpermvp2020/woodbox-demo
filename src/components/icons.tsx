import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

export function BagIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5.5 8.5h13l-.8 11h-11.4l-.8-11Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>;
}

export function HeartIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20.5 8.8c0 5-8.5 10-8.5 10s-8.5-5-8.5-10A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8.5 1.2Z"/></svg>;
}

export function UserIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.4-4 2.6-6 6.5-6s6.1 2 6.5 6"/></svg>;
}

export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}

export function ArrowIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 12h15M14 6l6 6-6 6"/></svg>;
}

export function MinusIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14"/></svg>;
}

export function PlusIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14M12 5v14"/></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>;
}
