import React, { useEffect, useState } from "react";
import { useLogin } from "../services/AuthContext";

const Album = () => {
  const { login, setJwt } = useLogin();

  return (
    <div> Создать новый альбом </div>
  );
};

export default Album;