export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

{
  "id": 1,
  "name": "Bello Rasheed",
  "email": "rasheed@example.com",
  "isActive": true,
  "age": 31,
  "address": {
    "street": "255 Ojo Road",
    "city": "Lagos",
    "zipCode": "100001"
  },
  "roles": ["admin", "editor"],
  "createdAt": "2023-06-01T12:00:00Z"
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserModalProps {
  onclose: () => void
  onSubmit: (post: UserProps) => void;
