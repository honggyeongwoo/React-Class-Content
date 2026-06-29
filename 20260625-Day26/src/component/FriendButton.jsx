// FriendButton.jsx
import React from 'react';

export default function FriendButton({ name, onClick }) {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  );
}