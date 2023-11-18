import { useState } from 'react';

const Section = ({ title, description, isActive, onClick }) => {
  return (
    <div className='p-4 border-b border-gray-200'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-800'>{title}</h1>
        <button
          onClick={onClick}
          className={`text-sm px-4 py-2 rounded-md ${
            isActive ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          {isActive ? 'Hide' : 'Show'}
        </button>
      </div>
      {isActive && <p className='mt-2 text-gray-600'>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (sectionTitle) => {
    setActiveSection(activeSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className='max-w-4xl mx-auto mt-10 shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-white'>
        <Section
          title='About Instamart'
          description={
            <div>
              <p>
                Instamart is a leading online grocery store with a wide array of
                products and services. We aim to make shopping convenient and
                accessible for everyone.
              </p>
              <ul className='list-disc list-inside'>
                <li>
                  Wide range of products including fresh fruits, vegetables, and
                  daily essentials.
                </li>
                <li>
                  Seamless online shopping experience with user-friendly website
                  and app.
                </li>
                <li>
                  Commitment to sustainability and eco-friendly practices.
                </li>
              </ul>
            </div>
          }
          isActive={activeSection === 'About Instamart'}
          onClick={() => handleToggle('About Instamart')}
        />
        <Section
          title='Team Instamart'
          description={
            <div>
              <p>
                Our team is our greatest asset. Comprising industry veterans and
                young innovators, we are driven to redefine the online grocery
                shopping experience.
              </p>
              <ul className='list-disc list-inside'>
                <li>
                  Diverse team with expertise in e-commerce, logistics, and
                  customer service.
                </li>
                <li>A culture of innovation and continuous improvement.</li>
                <li>
                  Committed to employee development and creating a positive work
                  environment.
                </li>
              </ul>
            </div>
          }
          isActive={activeSection === 'Team Instamart'}
          onClick={() => handleToggle('Team Instamart')}
        />
        <Section
          title='Career Instamart'
          description={
            <div>
              <p>
                Join our team and contribute to the future of online grocery
                shopping! We offer a variety of roles suited to different skills
                and experiences.
              </p>
              <ul className='list-disc list-inside'>
                <li>
                  Opportunities in technology, marketing, customer support, and
                  more.
                </li>
                <li>A dynamic and supportive workplace culture.</li>
                <li>Focus on career growth and personal development.</li>
              </ul>
            </div>
          }
          isActive={activeSection === 'Career Instamart'}
          onClick={() => handleToggle('Career Instamart')}
        />
      </div>
    </div>
  );
};

export default Instamart;
