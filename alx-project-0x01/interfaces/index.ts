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
  city: string;
  zipCode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  age: number;
  address: Address;
  roles: string[];
  createdAt: string;
}
