import React from 'react';
import classnames from 'classnames';
import './Card.scss';
import ArrowDown from '../../../svg/arrow-down.svg';
import ArrowRight from '../../../svg/arrow-right.svg';
import Document from '../../../svg/document.svg';

const Card = (props) => {
  const { title, description, featured, documentSize } = props.data;
  const isFeatured = JSON.parse(featured);
  
  return (
    <div className={classnames("card", props.className, {"featured": isFeatured})}>
      <div className="title">
        {title}
      </div>
      <div className="description">
        {description}
      </div>
      <div className="footer">
        {
          documentSize?
          <>
           <div className="document">
            <Document width={20} height={20}/>
            <span>PDF ({documentSize})</span>
           </div>
           <div className="arrow">
            <ArrowDown width={20} height={20}/>
           </div>
          </>
          :
          <>
            <div className="arrow ml-auto">
              <ArrowRight width={20} height={20}/>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Card;
