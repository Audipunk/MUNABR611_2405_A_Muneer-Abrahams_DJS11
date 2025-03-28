import React from 'react';
import { ButtonIcon,} from '@radix-ui/react-icons';

function ThemeToggle({ theme, toggleTheme, size = 18 }) {
   return (
     <button onClick={toggleTheme} className="theme-toggle">
       {theme === 'light' ? <button width={size} height={size} /> : <ButtonIcon width={size} height={size} />}
     </button>
   );
 }

 export default ThemeToggle;