import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          I'm Morshed, a passionate software developer from Dhaka, Bangladesh. I
          graduated from Rangamati Science and Technology University with a
          degree in Computer Science and Engineering, achieved CGPA 3.56 out of
          4. During my university years, I actively participated in competitive
          programming and dedicated myself to a blood donation and social
          organizations. In my final year, I exporled machine learning and deep
          learning and worked in Bangla natural language processing and
          published a conference paper. Currently, I'm thriving as a full-stack
          developer at Asiatic Mindshare Limited, where I continue to explore
          and contribute to the world of technology.
        </div>
        <div className="about-img">
          <Image
            src="/dn2xmjsug/image/upload/v1692556286/MorshedPic_zb4gnh.jpg"
            alt="Morshed Pic"
            className="profile-img"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
