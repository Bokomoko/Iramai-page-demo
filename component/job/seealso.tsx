import React from 'react';
interface SeeAlsoData {
  jobTitle: string
  jobPage: string
}

interface listOfSeeAlso {
  listOfSA: Array<SeeAlsoData>
}


export default function SeeAlso(props) {
  const { title, listOfJobs, color } = props

  const colorsAvailable = {
    green: {
      background: "#41BFAD0F",
      icon: `./icons/briefcaseicongreen.svg`
    },
    blue: {
      background: "#56A8F70F",
      icon: `./icons/briefcaseiconblue.svg`
    },
    darkblue: {
      background: "#6C7BD40F",
      icon: `./icons/briefcaseicondarkblue.svg`
    },
  }
  const setColor = colorsAvailable[color]
  const colorClass = (`item${color}`)
  return (
    <div>
      <style>
        {`
        .checkalsobox {
          width : 90%;
          display: block;
          height : auto;
          align-itens : baseline;
          color: black;
        }

        .checkalsobox h5 {
          margin-top:20px;
          text-align: left;
          font: normal normal medium 16px/21px Gordita;
          letter-spacing: 0px;
        }

        .itemlist {
          display:flex;
          width: 100%;
          flex-wrap : wrap;
          row-gap : 7px;
          column-gap : 7px;

        }

        .itemgreen {
          display: flex;
          flex-wrap : nowrap;
          height : 32px;
          background: #41BFAD0F;
          border-radius: 50px;
          text-align: left;
          font: normal normal normal 14px/22px Gordita;
          letter-spacing: 0px;
          padding-left : 4px;
          padding-right: 4px;
        }
        .itemblue {
          display: flex;
          flex-wrap : nowrap;
          height : 32px;
          background: #56A8F70F;
          border-radius: 50px;
          text-align: left;
          font: normal normal normal 14px/22px Gordita;
          letter-spacing: 0px;
          padding-left : 4px;
          padding-right: 4px;
        }
        .itemdarkblue {
          display: flex;
          flex-wrap : nowrap;
          height : 32px;
          background: #6C7BD40F;
          border-radius: 50px;
          text-align: left;
          font: normal normal normal 14px/22px Gordita;
          letter-spacing: 0px;
          padding-left : 4px;
          padding-right: 4px;
        }
        .itemicon{
          width : 20px;
          height : 20px;
        }
        a {
          width: auto;
          color : black;
          padding-top : 2px;
        }
      `}
      </style>
      <div className="checkalsobox">
        <h5> {title}</h5>
        <div className="itemlist">

          {listOfJobs.map((aJob, index) => {
            return (
              <div className={colorClass} key={"lsj-" + index}>
                <div className="itemicon">
                  <img src={setColor.icon} />
                </div>
                <a href={aJob.jobPage}> {aJob.jobTitle}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
}
