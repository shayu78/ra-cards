import React from 'react';

export default function Card(props) {
  const { title, text } = props;

  const cardStyle = {
    width: '18rem',
  };

  const onClickHandle = (event) => {
    event.preventDefault();
  }

  return (
    <div className="card" style={cardStyle}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="." className="btn btn-primary" onClick={onClickHandle}>Go somewhere</a>
      </div>
    </div>
  );
}
