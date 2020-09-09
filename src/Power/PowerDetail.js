import React from 'react';

const PowerDetail = ({ title, icon, value, unit }) => {
  return (
    <div className="power__bottom__detail">
      <div className="power__bottom__detail__icon">{icon}</div>
      <div className="power__bottom__detail__content">
        <p>
          {value}
          <span className="gray">{unit}</span>
        </p>
        <h5 className="gray">{title}</h5>
      </div>
    </div>
  );
};
export default PowerDetail;
