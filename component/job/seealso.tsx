import React from 'react';
interface SeeAlso {
  jobTitle: string
  jobPage: string
}

interface listOfSeeAlso {
  listOfSA: Array<SeeAlso>
}


export default function SeeAlso(props) {
  const { title, listOfJobs, color } = props

  const colorsAvailable = {
    green: {
      background: "#41BFAD0F",
      icon: `./icons/briefcaseicongreen.svg`
    },
    blue: {
      background: "##56A8F70F",
      icon: `./icons/briefcaseiconblue.svg`
    },
    darkblue: {
      background: "#6C7BD40F",
      icon: `./icons/briefcaseicondarkblue.svg`
    },
  }
  const setColor = colorsAvailable[color]
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
          align-itens : baseline;
        }

        .checkalsothis {
          text-align: left;
          font: medium 16px/21px Gordita;
          letter-spacing: 0px;
          color: #212121;
          margin-botton : 24px
        }

        .checkalsoitembox {
          padding-left: 5px;
          padding-top : 4px;
          padding-right : 10px;
          margin-left : 8px;
          margin-top : 8px;
          height : 32px;
          background: ${setColor.background} 0% 0% no-repeat padding-box;
          border-radius: 50px;
          text-align: left;
          font: normal normal normal 14px/22px Gordita;
          letter-spacing: 0px;
          border : 1px;
        }
        .checkalsoitembox img {
          width : 20px;
          height : 20px;
          
        }
        .checkitem{
          padding-top:7px;
        }
      `}
      </style>
      <p className="checkalsothis">{title}</p>
      <div className="checkalsobox">
        {listOfJobs.map((aJob, index) => {
          return (
            <a href="#">
              <span key={"lsj-" + index} className="checkalsoitembox">
                <img src={setColor.icon} /><a href={aJob.jobPage}
                  className="checkitem"> {aJob.jobTitle}</a>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
