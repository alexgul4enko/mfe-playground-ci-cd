declare module '*.module.scss' {
  interface ModuleClassNames {
    [className: string]: string;
  }
  const classNames: ModuleClassNames;
  export = classNames;
}

declare module '*.svg' {
  const source: string;
  export default source;
}

declare module '*.avif' {
  const source: string;
  export default source;
}

declare module '*.bmp' {
  const source: string;
  export default source;
}

declare module '*.gif' {
  const source: string;
  export default source;
}

declare module '*.jpg' {
  const source: string;
  export default source;
}

declare module '*.jpeg' {
  const source: string;
  export default source;
}

declare module '*.png' {
  const source: string;
  export default source;
}

declare module '*.webp' {
  const source: string;
  export default source;
}
