import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useSWR from 'swr';

const fetcher = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};

export default withPageAuthRequired(function Profile() {
  const { data, err } = useSWR('/api/protected', fetcher);
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (err) return <div>oops... {err.message}</div>;
  if (data === undefined) return <div>Loading...</div>;

  console.log(data);

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} height="100" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>
          <code>/profile/</code> is a protected route. This page can only be
          accessed while logged in.
        </p>
        <p>Session Info: {data.protected}</p>
      </div>
    )
  );
});
