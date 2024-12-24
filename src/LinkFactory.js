
import { v4 as uuidv4 } from 'uuid';
function LinkFactory({ icon, text, link }) {
  return {
    id: uuidv4(),
    link,
    icon,
    text,
  };
}


export default LinkFactory;