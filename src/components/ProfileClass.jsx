import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    const getUserData = async () => {
      const response = await fetch('https://api.github.com/users/zaheer-zk');
      const json = await response.json();
      this.setState({ userData: json });
    };
    getUserData();
  }

  render() {
    const { userData } = this.state;
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-stone-200 text-white'>
        <div className='p-6 bg-zinc-500 rounded-lg shadow-xl'>
          {userData.avatar_url && (
            <img
              src={userData.avatar_url}
              alt='Profile'
              className='w-40 h-40 rounded-full mx-auto border-4 border-gray-700 shadow-lg'
            />
          )}
          <div className='text-center mt-4'>
            <h1 className='text-3xl font-bold'>
              Name: {userData.name || 'N/A'}
            </h1>
            <p className='text-md mt-2'>
              Bio: {userData.bio || 'No bio available'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

/**
 * There are 2 phase
 *
 * ------ -> constructor -> update ->
 * render -> render      -> render -> unmounting
 * : ------------------------------------------ :
 * commit -> DOM manipulation ---- -> unmounting
 */

/**
 * Parent to child
 *  Parent - Constructor
 *  Parent - Render
 *    Child - Construct
 *    Child - Render
 *    Child - (didMount)
 *  Parent - (didMount)
 */

/**
 * Parent to 2 child component
 * RENDER PHASE STARTS
 *  Parent - Constructor
 *  Parent - Render
 *    Child1 - Constructor
 *    Child1 - Render
 *    Child2 - Constructor
 *    Child2 - Render
 * COMMIT PHASE START'S
 *    Child1 - (didMount)
 *    Child2 - (didMount)
 *  Parent - LifeCycle
 */

/**
   * Rendering steps own lifeCycle
    1. constructor
    2. render
    6. willUnmount // because we destructed
    3. didMount // Initial loaded
    4. render
    5. didUpdate // because we updated
   */
