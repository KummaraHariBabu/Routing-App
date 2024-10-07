import React from "react";

const About = () => {
  const comparisionDataHeaderData = [
    "Feature",
    "Online Courses",
    "Mentoring",
    "Self-Learning",
  ];
  const comparisonData = [
    {
      feature: "Structure",
      online: "Highly structured",
      mentoring: "Semi-structured",
      selfLearning: "No structure",
    },
    {
      feature: "Interaction",
      online: "Limited",
      mentoring: "High",
      selfLearning: "None",
    },
    {
      feature: "Cost",
      online: "Varies (free to expensive)",
      mentoring: "Often expensive",
      selfLearning: "Usually free",
    },
    {
      feature: "Personalization",
      online: "General",
      mentoring: "Highly personalized",
      selfLearning: "Personalized but unguided",
    },
    {
      feature: "Pacing",
      online: "Self-paced",
      mentoring: "Guided, mentor-driven",
      selfLearning: "Self-paced",
    },
    {
      feature: "Feedback",
      online: "Minimal feedback",
      mentoring: "Regular, direct feedback",
      selfLearning: "Minimal feedback",
    },
    {
      feature: "Best For",
      online: "Structured learners",
      mentoring: "Personal guidance seekers",
      selfLearning: "Self-motivated learners",
    },
  ];

  return (
    <div className="aboutInformation">
      <h1>Online Learning: Courses, Mentoring, and Self-Learning</h1>

      <p>
        In today's digital era, learning has become more accessible than ever,
        with various methods available for enhancing skills or exploring new
        areas of interest. Here’s an overview of online courses, mentoring, and
        self-learning.
      </p>

      <h2>1. Online Courses</h2>
      <p>
        Online courses offer structured, often self-paced learning, covering
        broad topics. They typically include video lessons, quizzes,
        assignments, and certifications.
      </p>
      <ul>
        <li>
          <strong>Popular Platforms:</strong> Coursera, Udemy, edX, Pluralsight,
          Khan Academy
        </li>
        <li>
          <strong>Advantages:</strong> Flexibility, variety, structured
          learning, certification
        </li>
        <li>
          <strong>Disadvantages:</strong> Limited interaction, requires
          discipline
        </li>
      </ul>

      <h2>2. Mentoring</h2>
      <p>
        Mentoring involves one-on-one guidance from experienced professionals.
        It’s ideal for personalized advice, support, and career development.
      </p>
      <ul>
        <li>
          <strong>Popular Platforms:</strong> MentorCruise, Clarity.fm, Coding
          Coach
        </li>
        <li>
          <strong>Advantages:</strong> Personalized guidance, networking,
          accountability
        </li>
        <li>
          <strong>Disadvantages:</strong> Often expensive, finding the right
          mentor can be challenging
        </li>
      </ul>

      <h2>3. Self-Learning</h2>
      <p>
        Self-learning is the process of taking initiative and responsibility for
        your own education. With many free resources available online, it’s a
        highly viable method.
      </p>
      <ul>
        <li>
          <strong>Common Resources:</strong> YouTube, official documentation,
          GitHub, blogs, podcasts
        </li>
        <li>
          <strong>Advantages:</strong> Complete control, cost-effective,
          resourcefulness
        </li>
        <li>
          <strong>Disadvantages:</strong> Lack of structure, limited feedback
        </li>
      </ul>

      <h2>Comparison: Online Courses, Mentoring, and Self-Learning</h2>
      <div className="tableWrapper">
        <table className="comparisonTable">
          <thead>
            <tr>
              {comparisionDataHeaderData.map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td>{row.feature}</td>
                <td>{row.online}</td>
                <td>{row.mentoring}</td>
                <td>{row.selfLearning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Each learning method has its strengths. Combining online courses,
        mentoring, and self-learning offers a well-rounded, effective way to
        acquire new skills.
      </p>
    </div>
  );
};

export default About;
