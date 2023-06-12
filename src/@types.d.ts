
export type AuthContextType = {
  isLoggedIn: boolean;
  isAdmin:boolean;
  username?: string;
  email?: string;
  token?: string;
  login: (username?: string, email?: string, token?: string) => void;
  logout: () => void;
};
export type ChildProps = {
  children?: React.ReactNode;
};

export type SignUpFormType = {
  firstName:string,
  lastName:string,
  userName:string,
  email: string;
  password: string;
};
export type SignInFormType = {
  email: string;
  password: string;
};
export type Books = {
  book_id: string;
  position: string;
  name: string;
  author: string;
  cover: string;
  rating: number;
  description: string;
  genres: string;
};
