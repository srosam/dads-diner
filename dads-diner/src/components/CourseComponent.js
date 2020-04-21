import React from 'react';
import { Box } from 'grommet';
import CourseSection from './CourseSectionComponent'
import "./Course.css"

function Course(props){

    const sections = props.courseData.sections.map(
      (i) => <CourseSection
            key={i.key} 
            item={i}
            itemChanged={props.itemChanged}
            validityChanged={props.validityChanged}
            debug={props.debug}
            ></CourseSection>);

return(
    <div className="course-component">
      <span>Course Container #{props.courseData.key}</span>
      <span className="title">{props.courseData.name}</span>
      <Box direction="row" width="large" animation="fadeIn">
        {sections}
      </Box>
    </div>
  );
}

export default Course;