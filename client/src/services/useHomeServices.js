import React from 'react'
import axios from 'axios';
import { useRedux } from '../context/useRedux';

export const homeReducer = {
  user: {
    name: "Facu"
  }
};

export const useHomeServices = () => {
  const services = { ...useRedux() };
  const { home, setHome } = services;

  // Add your services (or redux actions)...

  services.changeUserName = () => {
    setHome({ user: { name: "Sion" } }, "CHANGE_USER_NAME");
  }

  return { ...services };
}

