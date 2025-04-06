type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AppProviders;
