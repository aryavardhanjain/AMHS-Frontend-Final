import React from "react";
import "../styles/Team.css";

const TeamMember = ({ image, name, title, description }) => {
  return (
    <div className="team-member">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt={name} className="profile-image" />
          </div>
          <div className="flip-card-back">
            <h2 className="member-name">{name}</h2>
            <p className="member-title">{title}</p>
          </div>
        </div>
      </div>
      <div className="introduction-box">
        <p
          className="introduction-text"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      image: "/images/profile2.jpg",
      name: "Megha Jain",
      title: "Clinical Psychologist",
      description: `I believe that psychotherapy is a process to achieve results from the interaction between the client and the therapist in the most empathetic and non-judgemental form, I consider both the client and the therapist to be in equal positions without establishing any sense of authority one over another. I intend to work in the setup of psychotherapy to explore the dynamics of the psyche on both ends of the table.

        I have worked for over 1200 hours of intense psychotherapy with problems related to relationships, commitment, parent-child interaction, existential crisis, sleep, work motivation, family crisis, sexual discontentment, abuse, and trauma.

        <br><br>
        The concerns that I have previously worked with range from Neurodivergence, depressive disorder, obsessive-compulsive disorder, Anxiety, Dissociation, Post-Traumatic Stress, Schizophrenia, Borderline Personality, and Narcissistic personality to Avoidant personality.

        My specialization of models in psychotherapy includes psychoanalysis, clinical hypnotherapy, acceptance and commitment therapy, dialectical Behavior therapy, cognitive behavior therapy, art therapy, techniques of mindfulness, EFT, anger management, assertiveness-communication training, and Relaxation exercises. I am a trauma informed, queer Affirmative and a spirituality-inclusive, Clinical Psychologist with pronouns she/her. I hold a valid practicing license registered with the Rehabilitation Counsil of India (RCI) with CRR no. A89424.<br><br> I have majored in the field of Clinical Psychology with an intention of dealing with a specific clientele which requires serious help with diagnosable conditions and disorders along with the assessment process of these disorders. I believe in psychotherapy as a crucial weapon that deserves a place in all our toolboxes to deal with the more complicated and advanced stressors in the environment of the modern day scenario.`,
    },
    {
      image: "/images/profile3.jpg",
      name: "Aryavardhan Jain",
      title: "Clinical Director",
      description: `<br><br>Meet Aryavardhan Jain, the Technical Director in this project, who is currently pursuing his B.Tech in Computer Science and Engineering from Vellore Institute of Technology, Bhopal.
        <br>Young and dynamic, Aryavardhan is an intermediate web developer with a fervent dedication to creating impactful online platforms. With an academic background in computer science and engineering, he possesses a solid foundation in technology that fuels his drive to bring Antarman: MHS to life.
        This initiative reflects his commitment to excellence and creativity in web development. <br>With each line of code he writes, Aryavardhan innovates new ways of gaining accessibility to mental healthcare with a sense of purpose and innovation. His passion for technology fused with mental health, coupled with his relentless pursuit of perfection, results in web experiences that are not only functional but also visually captivating.
        Beyond the screen, Aryavardhan is an explorer of possibilities. He has been attuned to emerging trends and technologies, ensuring that AMHS is always at the forefront of innovation. This commitment to staying ahead of the curve transforms Antarman: MHS into a dynamic and evolving platform that caters to the ever-changing needs of its users.
        <br>Aryavardhan's journey is marked by his determination to master the art of web development. His collaborative spirit and innate curiosity drive him to continuously seek growth opportunities, both personally and professionally. As he aspires to make a meaningful impact in the world of technology, Antarman: aims to become a testament to his unwavering dedication.`,
    },
  ];

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          image={member.image}
          name={member.name}
          title={member.title}
          description={member.description}
        />
      ))}
    </div>
  );
};

export default Team;
