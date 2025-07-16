{
  "id": 1,
  "name": "Bello Rasheed",
  "username": "Rasheedbell45",
  "email": "rasheed@example.com",
  "address": {
    "street": "Ojo Road Ajegunle",
    "suite": "Apt. 255",
    "city": "Lagos",
    "zipcode": "102201",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "2348069338674",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
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

export interface UserModalProps {
  user: UserProps;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
