import React from 'react';

const WorkAndAchievements = () => {
  const achievements = [
    "Starred in Netflix's 'Monsters' (Extra)",
    "Lead roles in 'MAN UP', 'Waiting For Uber', and 'Drug Kills'",
    "Upcoming Bollywood debut in 'The Unknown Mind'",
    "Graduated from AMDA (American Musical and Dramatic Academy) in 2024",
    "Walked the ramp for top international designers and featured in global fashion magazines",
    "Recognized for humanitarian work and activism, featured on CNN, Hindustan Times, and Times Now Navbharat",
    "Social media influencer with over 40 million followers, promoting South Asian culture and unity"
  ];

  return (
    <div className="w-full max-w-[90vw] lg:max-w-[60vw] mx-auto my-10 border-gray-200 shadow-lg rounded-xl p-6 bg-gradient-to-b from-white to-gray-100" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Work & Achievements</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="hover:text-yellow-500 transition-colors duration-200">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkAndAchievements;