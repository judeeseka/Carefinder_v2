declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address?: string;
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  name: string;
  address: string;
};

declare type SideFooterProps = {
  user: Models.User<Models.Preferences>;
  type?: "mobile" | "desktop";
};

declare type SearchControlProps = {
  stateOptions: string[];
  providerOptions: string[];
};

declare type ProviderType = {
  name: string;
  phoneNumber: [] | string[];
  state: string;
  type: string;
  address: string;
  $id: string;
};
