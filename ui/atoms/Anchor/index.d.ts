interface AnchorType {
  href: string;
}

declare const Anchor: React.FC<AnchorType & JSX.IntrinsicElements['a']>

export { Anchor };
