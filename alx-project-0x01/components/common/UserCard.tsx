export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    Userprops: {
      posts
    }
  }
}

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-bold">{user.name} (@{user.username})</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">Phone: {user.phone}</p>
      <p className="text-sm">Website: {user.website}</p>
      <p className="italic text-xs mt-2 text-blue-700">
        “{user.company.catchPhrase}”
      </p>
    </div>
  );
};
