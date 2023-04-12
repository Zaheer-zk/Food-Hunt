import { useState } from 'react';

const Section = ({ title, description, isActive, onClick }) => {
  console.log(onClick, isActive);
  return (
    <>
      <h1>{title}</h1>
      <button onClick={onClick}>{isActive ? 'Hide' : 'Show'}</button>
      {isActive && <p>{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (sectionTitle) => {
    if (sectionTitle === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionTitle);
    }
  };
  return (
    <div className="m-3 p-3 border flex flex-col justify-around">
      <div>
        <Section
          title="About Instamart"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          isActive={activeSection === 'About Instamart'}
          onClick={() => handleToggle('About Instamart')}
        />
      </div>
      <div>
        <Section
          title="Team Instamart"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          isActive={activeSection === 'Team Instamart'}
          onClick={() => handleToggle('Team Instamart')}
        />
      </div>
      <div>
        <Section
          title="Career Instamart"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu. Enim tortor at auctor urna nunc id cursus metus aliquam. Commodo viverra maecenas accumsan lacus vel."
          isActive={activeSection === 'Career Instamart'}
          onClick={() => handleToggle('Career Instamart')}
        />
      </div>
    </div>
  );
};

export default Instamart;
