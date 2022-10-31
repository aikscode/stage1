import React, { Fragment } from "react";
import LinkSection from "./LinkSection";
import ProfileSection from "./ProfileSection";

function Home() {
  return (
    <Fragment>
      <ProfileSection />
      <LinkSection />
    </Fragment>
  );
}

export default Home;
