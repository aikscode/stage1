import React, { Fragment } from "react";
import LinkSection from "./LinkSection";
import ProfileSection from "./ProfileSection";
import SocialSection from "./SocialSection";
import Footer from "./Footer";

function Home() {
  return (
    <Fragment>
      <ProfileSection />
      <main>
        <LinkSection />
      </main>
      <SocialSection />
      <Footer />
    </Fragment>
  );
}

export default Home;
