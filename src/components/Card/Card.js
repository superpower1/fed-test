import React from 'react';
import classnames from 'classnames';
import './Card.scss';

const Card = (props) => {
  const { title, description, featured } = props.data;
  const isFeatured = JSON.parse(featured);
  
  return (
    <div className={classnames("card", props.className, {"featured": isFeatured})}>
      <div className={classnames("title", {"featured": isFeatured})}>
        {title}
      </div>
      <div className={classnames("description", {"featured": isFeatured})}>
        {description}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Card;
