export default function AbcLayout({ children }: LayoutProps<"/abc">) {
  return (
    <div>
      <div>welcome to the abc layout.!</div>
      {children}
    </div>
  );
}
