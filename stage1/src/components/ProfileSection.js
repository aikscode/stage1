import React, { Fragment } from "react";
import styles from "./ProfileSection.module.css";

function ProfileSection() {
  return (
    <Fragment>
      <header className={styles.profileSectionHeader}>
        <div className={styles.profile__img}>
          <img
            id="profile__img"
            src="https://s3-alpha-sig.figma.com/img/2da6/2863/07bb9151790067673c29b481c2c24fe6?Expires=1668384000&Signature=AVGRC5k~GXCOHp6bkqU4g2bFTTRGVTAuBf1xiL47lSkweU9iPOjIHF6iYVoVHgKqiQn61bq2NFWKuJi5i0KTzONPqwD7gm-sLFtVEMklPZlR539jQbWChVRsRmHNv1ys2-kutEQo-T2QotLBpjs59i6wBx~4~6di1X0~xAtsCo2SCHpG8bgfqbXyooOa-wsqIhWqLybZ7mJjy2yu65VGjpG219EdeE9xS8foPFHhvKtAW7DuEab7w5CkUaMpO22UKrg-Me9IKX7GjeFVRGZSirsxAVc30YfsDD7A0t4uvFVuyDDiGf6I0S1E7lsBgNSWq~N-QraXHx8mPYCI5LVhsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </div>
        <p id="twitter" className={styles.twitter}>
          Twitter : @itsaikins
        </p>
        <p id="slack" className={styles.slack}>
          Slack : Aikins Dwamena
        </p>
      </header>
    </Fragment>
  );
}

export default ProfileSection;
