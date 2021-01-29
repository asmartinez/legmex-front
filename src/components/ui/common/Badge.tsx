import React from 'react';
import { BadgeCustom } from '../../../shared/utils/interfaces';

const Badge = (badge: BadgeCustom) => {
   return (
      <>
         <span className="text-muted">{badge.title}</span>
         <span
          className="badge badge-warning badge-pill"
          style={{marginRight: '8px', marginLeft:'4px'}}>
            {badge.value}
         </span>
      </>
   )
}

export default Badge;