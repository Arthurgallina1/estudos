import React from 'react';

export default function ErrorDemo({ name }) {
  if (name != 'codebucks') {
    throw new Error('There is an error, no name provided');
  }
  return <div>{name}</div>;
}
