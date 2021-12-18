import React from 'react';

const List = ({age,name,img}) => {
  return (
    <li className="person">
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
      
    </li>
  );
};

export default List;