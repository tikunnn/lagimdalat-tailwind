import React from "react";

const Settings = () => {
  return (
    <div>
      <h1 className="text-xl font-medium">Settings</h1>
      <h1 className="text-lg font-medium mt-5">Change the password</h1>
      <div className="mt-4">
        <div className="flex flex-col mt-4">
          <h3>Old password</h3>
          <input
            placeholder="Requirement"
            className="border-gray-500 p-1 border-2 rounded-md"
            type="password"
          />
        </div>

        <div className="flex flex-col mt-4">
          <h3>New password</h3>
          <input
            placeholder="Requirement"
            className="border-gray-500 p-1 border-2 rounded-md"
            type="password"
          />
        </div>

        <div className="flex flex-col mt-4">
          <h3>Re-enter the password</h3>
          <input
            placeholder="Requirement"
            className="border-gray-500 p-1 border-2 rounded-md"
            type="password"
          />
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-secondary-color p-2 rounded-sm text-white hover:bg-primary-color duration-300">
          Update
        </button>
      </div>
    </div>
  );
};

export default Settings;
