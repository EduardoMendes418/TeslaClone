import React from "react";
import Button from "./Button";
import "./Item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const item = ({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div className="item" style={{
        backgroundImage: `url(${backgroundImg})`
    }}>
      <div className="item_container">
        <div className="item_text"> 
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
          <div className="item_loserThird">
            <div className="item_buttons">
                  <Button img="primary" text={leftBtnTxt} link={leftBtnLink}/>
              {twoButtons && (
                  <Button  img="secondary" text={rightBtnTxt} link={rightBtnLink}/>
              )}
            </div>
            {first && (
                <div className="item_expand">    
                    <ExpandMoreIcon />
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
