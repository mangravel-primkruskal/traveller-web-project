import React, { useState } from "react";

function Home() {
  useState(() => {
    window.location.href = "/dashboard";
  });
  return <div></div>;
}

export default Home;
