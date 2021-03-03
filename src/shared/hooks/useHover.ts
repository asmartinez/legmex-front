import { useRef, useState, useEffect } from 'react';

interface IHover {
   hoverRef: React.RefObject<HTMLDivElement>,
   isHovered: boolean
}

export const useHover = (): IHover => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

   useEffect(
      () => {
         const node = hoverRef.current;
         if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
               node.removeEventListener('mouseover', handleMouseOver);
               node.removeEventListener('mouseout', handleMouseOut);
            };
         }
      },
      [hoverRef.current]
   );

   return { hoverRef, isHovered };
}