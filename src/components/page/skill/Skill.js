import SkillRange from './range/SkillRange';
import './Skill.css';
import Quote from './quote/Quote';
import { useLocation } from 'react-router-dom';


export default function Skill() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div className="skill-container" >
      
       {path === "" &&
      <div div className="part-skill">Skill</div>
      }
      <Quote />
      <SkillRange />
    </div >
  )
}