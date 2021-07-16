import { useState } from "react";

const UpdateUserInfo = ({ state, snackState, setSnackState }) => {
  const [displayName, setDisplayName] = useState(null);

  const updateUserName = () => {
    state.currentUser
      .updateProfile({
        displayName: displayName,
      })
      .then(() => {
        setSnackState({
          ...snackState,
          openSnack: true,
          type: "success",
          text: "Name saved!",
        });
      });
  };

  return (
    <>
      <div>
        <div className="mb-2">Enter you name</div>
        <div className="flex flex-col">
          <input
            id="displayName"
            type="text"
            className="mb-4 rounded w-60 h-9 pl-2 rounded-lg text-black font-semibold"
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <button
            type="button"
            className="py-2 px-4 mb-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            onClick={updateUserName}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateUserInfo;
