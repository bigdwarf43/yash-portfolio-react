import uniqid from 'uniqid'
import { skills, familiarWithSkills } from '../../portfolio'
import './Skills.css'


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' style={{fontSize:"18px"}}>
            {skill}
          </li>
        ))}
      </ul>
      <h2 className='section__title' style={{paddingTop: "40px"}}>I am familiar with</h2>
      <ul className='skills__list'>
        {familiarWithSkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' style={{fontSize:"18px"}}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
