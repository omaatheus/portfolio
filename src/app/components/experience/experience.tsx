import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="About Me"/>
          <p>3rd year Integrated High School student in Systems Development, with a great passion for programming, football and cars. 
            I have knowledge of the following technologies:</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={3} years="React Native"/>
            <Skill image="/ts.png" measure={3} years="TypeScript"/>
            <Skill image="/js.png" measure={3} years="JavaScript"/>
            <Skill image="/java.png" measure={3} years="Java"/>
          </div>
        </div>
    )
}