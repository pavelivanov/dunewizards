declare global {

  declare namespace React {

    type CFC<P = {}> = FC<{ children?: ReactNode } & P>
  }
}

export {}
