import React from 'react';

export default function Test3() {
  const trajectories = [
    'Engineer',
    'Architect',
    'Tech Lead',
    'Tech Lead Manager',
    'Engineer Director',
    'Senior Engineer',
    'Senior Architect',
    'Senior Tech Lead',
    'Senior Tech Lead Manager',
    'VP of Engineering',
  ];

  return (
    <div>
      <style>
        {`
          .checkalsobox {
            max-width: 408px;
            display:flex;
            height : auto;
            padding : 10px;
            flex-wrap : wrap;

          }

          .checkalsoitembox {
            padding-left: 5px;
            padding-top : 4px;
            padding-right : 10px;
            margin-left : 8px;
            margin-top : 8px;
            height : 32px;
            background: #41BFAD0F 0% 0% no-repeat padding-box;
            border-radius: 50px;
            text-align: left;
            font: normal normal normal 14px/22px Gordita;
            letter-spacing: 0px;
            color: #444444;
            border : 1px;
          }
          .checkitem{
            padding-top:7px;
          }
        `}
      </style>
      <div className="checkalsobox">
        {trajectories.map((item, index) => {
          return (
            <a href="#">
              <span key={index} className="checkalsoitembox">
                <img src="./icons/briefcaseicongreen.svg" />
                <span className="checkitem"> {item}</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
