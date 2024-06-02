import React, { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    console.log("Landing page mounted");
    return () => console.log("Landing page unmounted");
  }, []);
  return <h1>Welcome to Student Manager</h1>;
};

export default LandingPage;
