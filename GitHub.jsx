import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center h-screen m-4 bg-gradient-to-r rounded-xl from-pink-300 to-cyan-300 text-black grid justify-center p-3 text-3xl `">
      <span className="font-bold underline underline-offset-8 text-purple-800">
        Github Followers : {data.followers}{' '}
      </span>
      <img
        className="rounded-lg border-2 border-black cursor-pointer"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Ali2220');
  console.log(response);

  return response.json();
};
