import React from "react";

const Header = (props) => {
  const logOutUser = ()=>{
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }
  return (
    <div className="flex justify-between align-start py-5 text-white">
      <h2 className="text-xl">
        Hello, <br />
        <span className="text-3xl text-bold">{props.data?.firstName} 👋</span>
      </h2>
      <button onClick={logOutUser} className="px-4 bg-red-700 rounded text-white text-lg font-medium h-[40px]">
        Log Out
      </button>
    </div>
  );
};

export default Header;
