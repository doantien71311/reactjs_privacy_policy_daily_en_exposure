// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useEffect } from "react";
import imageLogo from "./assets/image_logo.png";
import logoSendingExpeditionApp from "./assets/logo_sending_expedition_app.png";
import logoDailyEnExposureApp from "./assets/logo_daily_en_exposure_app.png";
// import "./App.css";
import { useTranslation } from "react-i18next";
import Lang from "./Lang";
// import { LanguageSelector } from "./componment/LanguageSelector";

function App() {
  const { t } = useTranslation();

  return (
    <>
      {/* <LanguageSelector />
      <h1>{t("greeting")}</h1> */}
     
      <img
        src={logoDailyEnExposureApp}
        width={500}
        height={500}
        alt="tiếp xúc EN hằng ngày app"
      ></img>
      <br></br>
      <strong>{t(Lang.PrivacyPolicy)}</strong>
      <p>
        {/* This privacy policy applies to the Survey Personal Information and Thám
        hiểm chi tiêu (hereby referred to as "Application") for mobile devices
        that was created by MrTien71311 (hereby referred to as "Service
        Provider") as a Free service. This service is intended for use "AS IS". */}
        This privacy policy applies to the mobile Tiếp xúc EN hằng ngày app
        (hereinafter collectively referred to as the "Applications") for mobile
        devices. These Applications were created by MrTien71311 (hereinafter
        referred to as the "Service Provider") and are provided as free
        services. These services are intended for use "AS IS".
      </p>
      <strong>Information Collection and Use</strong>
      <p>
        The Application collects information when you download and use it. This
        information may include information such as
      </p>
      <ul>
        <li>Your device's Internet Protocol address (e.g. IP address)</li>
        <li>
          The pages of the Application that you visit, the time and date of your
          visit, the time spent on those pages
        </li>
        <li>The time spent on the Application</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <p></p>
      <p>
        The Application does not gather precise information about the location
        of your mobile device.
      </p>
      <p>
        The Application collects your device's location, which helps the Service
        Provider determine your approximate geographical location and make use
        of in below ways:
      </p>
      <ul>
        <li>
          Geolocation Services: The Service Provider utilizes location data to
          provide features such as personalized content, relevant
          recommendations, and location-based services.
        </li>
        <li>
          Analytics and Improvements: Aggregated and anonymized location data
          helps the Service Provider to analyze user behavior, identify trends,
          and improve the overall performance and functionality of the
          Application.
        </li>
        <li>
          Third-Party Services: Periodically, the Service Provider may transmit
          anonymized location data to external services. These services assist
          them in enhancing the Application and optimizing their offerings.
        </li>
      </ul>
      <p>
        The Service Provider may use the information you provided to contact you
        from time to time to provide you with important information, required
        notices and marketing promotions.
      </p>
      <p>
        For a better experience, while using the Application, the Service
        Provider may require you to provide us with certain personally
        identifiable information, including but not limited to
        mrtien71311@gmail.com. The information that the Service Provider request
        will be retained by them and used as described in this privacy policy.
      </p>
      <strong>Third Party Access</strong>
      <p>
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their service. The Service Provider may share your information with
        third parties in the ways that are described in this privacy statement.
      </p>
      <p>
        The Service Provider may disclose User Provided and Automatically
        Collected Information:
      </p>
      <ul>
        <li>
          as required by law, such as to comply with a subpoena, or similar
          legal process;
        </li>
        <li>
          when they believe in good faith that disclosure is necessary to
          protect their rights, protect your safety or the safety of others,
          investigate fraud, or respond to a government request;
        </li>
        <li>
          with their trusted services providers who work on their behalf, do not
          have an independent use of the information we disclose to them, and
          have agreed to adhere to the rules set forth in this privacy
          statement.
        </li>
      </ul>
      <p></p>
      <strong>Opt-Out Rights</strong>
      <p>
        You can stop all collection of information by the Application easily by
        uninstalling it. You may use the standard uninstall processes as may be
        available as part of your mobile device or via the mobile application
        marketplace or network.
      </p>
      <strong>Data Retention Policy</strong>
      <p>
        The Service Provider will retain User Provided data for as long as you
        use the Application and for a reasonable time thereafter. If you'd like
        them to delete User Provided Data that you have provided via the
        Application, please contact them at mrtien71311@gmail.com and they will
        respond in a reasonable time.
      </p>
      <strong>Children</strong>
      <p>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13.
      </p>
      <div>
        <p>
          The Service Provider does not knowingly collect personally
          identifiable information from children. The Service Provider
          encourages all children to never submit any personally identifiable
          information through the Application and/or Services. The Service
          Provider encourage parents and legal guardians to monitor their
          children's Internet usage and to help enforce this Policy by
          instructing their children never to provide personally identifiable
          information through the Application and/or Services without their
          permission. If you have reason to believe that a child has provided
          personally identifiable information to the Service Provider through
          the Application and/or Services, please contact the Service Provider
          (mrtien71311@gmail.com) so that they will be able to take the
          necessary actions. You must also be at least 16 years of age to
          consent to the processing of your personally identifiable information
          in your country (in some countries we may allow your parent or
          guardian to do so on your behalf).
        </p>
      </div>
      <strong>Security</strong>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. The Service Provider provides physical, electronic,
        and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </p>
      <strong>Changes</strong>
      <p>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </p>
      <p>This privacy policy is effective as of 2025-06-18</p>
      <strong>Your Consent</strong>
      <p>
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy now and as amended by
        us.
      </p>
      <strong>Google Sign-In and Account Information</strong>
<p>
  The Application allows users to create an account and sign in using Google
  Sign-In (OAuth). When you sign in with Google, the Service Provider collects
  the following information:
</p>
<ul>
  <li>Your name (as registered in your Google account)</li>
  <li>Your email address</li>
  <li>Your unique User ID (generated by Firebase Authentication)</li>
</ul>
<p>
  This information is used solely for account creation, authentication, and
  providing personalized features within the Application. The Service Provider
  does not share this information with third parties except as required by law.
</p>

<strong id="account-deletion">Account Deletion</strong>
<p>
  Users have the right to delete their account and all associated data at any
  time. To delete your account:
</p>
<ul>
  <li>Open the Application</li>
  <li>Go to <strong>Settings → Account</strong></li>
  <li>Tap <strong>"Delete Account"</strong> and confirm</li>
</ul>
<p>Upon account deletion:</p>
<ul>
  <li>All personal information (name, email, User ID) will be permanently deleted</li>
  <li>All learning schedules and app data will be permanently deleted</li>
  <li>This action <strong>cannot be undone</strong></li>
</ul>
<p>
  Alternatively, you may request account deletion by contacting us at{" "}
  <a href="mailto:mrtien71311@gmail.com">mrtien71311@gmail.com</a>. We will
  process your request within 30 days.
</p>
      <strong>Contact Us</strong>
      <p>
        If you have any questions regarding privacy while using the Application,
        or have questions about the practices, please contact the Service
        Provider via email at mrtien71311@gmail.com.
      </p>
    </>
  );
}

export default App;
