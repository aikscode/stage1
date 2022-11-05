import React, { Fragment } from "react";
import ProfileSection from "../components/ProfileSection";
import LinkSection from "../components/LinkSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";
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
