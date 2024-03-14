import React, { useState } from 'react';
import './form.css';

const NominationForm = () => {
  const [formData, setFormData] = useState({
    //common fields
      Name: '',
      Designation:'',
      schoolName: '',
      schoolAddress:'',
      district:'',
      yearsofexp:'',
      contactEmail: '',
      contactPhone: '',
      additionalQualifications: '',
      subjectHandles: '',
      //part A
      innovativeTeachingPractices: [],
      listofpractises:'',
      curriculumEnrichment:[],
      problemSolving:[],
      project:[],
      result:[],
      //part B
      interschoolCoordinator:'',
      schoolCoordinator:'',
      schoolSeminar:'',
      proofResponsibility:[],
      responsibility:[],
      workshop:'',
      seminar:'',
      lecture:'',
      proofParticipation:[],
      role:'',
      //part C
      bookPublished:'',
      contribution:'',
      proofPublications:[],
      //part D
      teacherAward:'',
      projectAward:'',
      worldRecord:'',
      service:'',
      others:'',
      proofAchievements:[],
      //part E
      skill:'',
      awareness:'',
      photo:[],
      
    
  });

  const handleChange = (e, category) => {
    const { name, value, files } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name || category]: files || value,
    }));
  };
  
  
  const handleDrop = (e, category) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFormData({
      ...formData,
      [category]: [...formData[category], ...droppedFiles],
    });
  };

  const handleClickUpload = (e, category) => {
    const droppedFiles = Array.from(e.target.files);
    setFormData({
      ...formData,
      [category]: [...formData[category], ...droppedFiles],
    });

  }
  
  const handleDragOver = (e) => {
   e.preventDefault();
  };
  
  const handleRemoveFile = (fileName, category) => {
    setFormData({
      ...formData,
      [category]: formData[category].filter(file => file.name !== fileName),
    });
  };
  

  const FileUploadField = (category, label) => (
    <div className="form-group drop-zone" onDrop={(e) => handleDrop(e, category)} onDragOver={handleDragOver}>
      <label style={{cursor: 'pointer'}}>
        {label}
      <input
        id={`fileInput_${category}`}
        type="file"
        name={category}
        onChange={(e) => {
          handleClickUpload(e, category)}}
        multiple
        accept=".jpg, .jpeg, .png, .gif, .mp4, .mov, .pdf"
        style={{ display: 'none'}}
      />
      </label>
      {formData[category].length > 0 && (
        <div className="uploaded-files">
          <label>Uploaded Files:</label>
          <ul>
            {formData[category].map((file, index) => (
              <li key={index}>
                {file.name}
                <span className="remove-file-btn" onClick={() => handleRemoveFile(file.name, category)}>
                  Remove
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  

  const handleSubmit = (e) => {
    e.preventDefault();
     //  mandatory fields n
     if (!formData.Name || !formData.schoolName || !formData.contactEmail || !formData.contactPhone  ) {
      alert('Please fill out all mandatory fields.');
      return;
     }
    //  backend

    
    setFormData({
      //common fields
      Name: '',
      Designation:'',
      schoolName: '',
      schoolAddress:'',
      district:'',
      yearsofexp:'',
      contactEmail: '',
      contactPhone: '',
      additionalQualifications: '',
      subjectHandles: '',
      //part A
      innovativeTeachingPractices: [],
      listofpractises:'',
      curriculumEnrichment:[],
      problemSolving:[],
      project:[],
      result:[],
      //part B
      interschoolCoordinator:'',
      schoolCoordinator:'',
      schoolSeminar:'',
      proofResponsibility:[],
      responsibility:[],
      workshop:'',
      seminar:'',
      lecture:'',
      proofParticipation:[],
      role:'',
      //part C
      bookPublished:'',
      contribution:'',
      proofPublications:[],
      //part D
      teacherAward:'',
      projectAward:'',
      worldRecord:'',
      service:'',
      others:'',
      proofAchievements:[],
      //part E
      skill:'',
      awareness:'',
      photo:[],
      
      
    });
  };

  return (
    <>
    <div className="form-bg">
    <div className="nomination-form-container">
      <h2>KALAM- LEO MUTHU EDUCATIONAL  AWARDS -2024</h2>
      <h4 >Srinivasa Ramanujan  Best Maths  Teacher Award 2024</h4>
      <hr></hr>
      

       <form onSubmit={handleSubmit} className="nomination-form" autoComplete="off">
        {/* Nominee Information */}
        <div className="form-group">
          <label className='labels-group'>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            name="Designation"
            value={formData.Designation}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        
        <div className="form-group">
          <label>School/Institution Name:</label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        
        <div className="form-group">
          <label>School Address:</label>
          <input
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Total Years of Experience:</label>
          <input
            type="text"
            name="yearsofexp"
            value={formData.yearsofexp}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>


        <div className="form-group">
          <label>Contact Email:</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Contact Phone:</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/* Nominee's Achievements */}
        <div className="form-group">
          <label>Additional Qualifications:</label>
          <input
            type="text"
            name="additionalQualifications"
            value={formData.additionalQualifications}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>No.of Times handled subjects for High School:</label>
          <input
            type="text"
            name="subjectHandles"
            value={formData.subjectHandles}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <hr></hr>
        
         {/* PART A  */}


         

        
          <h3>PART A- TEACHING - LEARNING and EVALUATION <br>
          </br>(Academic Performance Index- API)</h3>

          <div>
           <label>1. a. Innovative Methodology adapted in Lecture & Tutorials</label>
          {FileUploadField('innovativeTeachingPractices', 'Drag & Drop Files')}
     
         </div>
          
          <div className="form-group">
          <label>b. 5 Best practices followed in Teaching Mathematics</label>
          <input
            type="text"
            name="listofpractises"
            value={formData.listofpractises}
            onChange={handleChange}
            className="input-field"
          />
        </div>

      <div>
      <label>2.	Contributions to Curriculum Enrichment</label>
      {FileUploadField('curriculumEnrichment', 'Drag & Drop Files')}
      </div>
      


      <div>
      <label>3.	Contribution to Problem solving ability / Add on Course to Enhance Student Cognitive Skills </label>
      {FileUploadField('problemSolving', 'Drag & Droop files')}
      </div>
      
      


      <div>
      <label>4.	Projects Guided /Working Model/ Prototype Development for Science Exhibitions -Maths department </label>
      {FileUploadField('project', 'Drag & Drop Files')}
      </div>
      
      

      <div>
      <label>5.	Academic Result Produced in the Last Year</label>
      {FileUploadField('result', 'Drag & Drop Files')}
      </div>
      
      <hr></hr>

      {/* PART-B */}

      <h3>PART B- Co- Curricular , Extension, and Professional Development<br>
          </br>(Co-Curricular Performance Index- CPI)</h3> 
           <label>1.	Co-Curricular Activities</label>
          <div className="form-group">

          <label>●	Inter-School Level Activity coordinated/ Event Convener</label>
          <input
            type="text"
            name="interschoolCoordinator"
            value={formData.interschoolCoordinator}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>●	School Level Event Coordinator</label>
          <input
            type="text"
            name="schoolCoordinator"
            value={formData.schoolCoordinator}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>●	Seminar taken for Students</label>
          <input
            type="text"
            name="schoolSeminar"
            value={formData.schoolSeminar}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
        <label>Upload details with Proof </label>
          {FileUploadField('proofResponsibility', 'Drag & Drop')}
        </div>

        <div>
      <label>2.	Academic and Administrative Committees and Responsibilities at School Level</label>
      {FileUploadField('responsibility', 'Drag & Drop Files')}
      </div>

      <label>3.	Professional Development activities Participation in</label>
          <div className="form-group">

          <label>● Workshops</label>
          <input
            type="text"
            name="workshop"
            value={formData.workshop}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>● Seminar</label>
          <input
            type="text"
            name="seminar"
            value={formData.seminar}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>● Lectures etc.</label>
          <input
            type="text"
            name="lecture"
            value={formData.lecture}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
        <label>Upload  Proof </label>
          {FileUploadField('proofParticipation', 'Drag & Drop')}
        </div>

        <label>4.Your Role as ABACUS / Quick Maths Teacher</label>
          <div className="form-group">

          <label>Describe your role in 50 words</label>
          <input
            type="text-area"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <hr></hr>

        {/* PART-C */}

        <h3>PART C- Publications RPI</h3> 
          
          <div className="form-group">

          <label>● Books Published </label>
          <input
            type="text"
            name="bookPublished"
            value={formData.bookPublished}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>● Book chapter Contribution</label>
          <input
            type="text"
            name="contribution"
            value={formData.contribution}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
        <label>Upload  Proof </label>
          {FileUploadField('proofPublications', 'Drag & Drop')}
        </div>
      
        <hr></hr>

      {/* PART-D */}

      <h3> PART D- Achievements and Awards ACPI</h3> 
      
          <div className="form-group">

          <label>1.Best Teacher Award (Govt./Non.govt)</label>
          <input
            type="text"
            name="teacherAward"
            value={formData.teacherAward}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>2.Best Project Awards (Govt./Non.govt) </label>
          <input
            type="text"
            name="projectAward"
            value={formData.projectAward}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>3.World Record</label>
          <input
            type="text"
            name="worldRecord"
            value={formData.worldRecord}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>4.Service to Community</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>5.Others</label>
          <input
            type="text"
            name="others"
            value={formData.others}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div>
        <label>Upload Documents with Proof </label>
          {FileUploadField('proofAchievements', 'Drag & Drop')}
        </div>
       
        <hr></hr>

      {/* PART-E */}

      <h3 >PART E- Skill and Awareness SPI	</h3> 
      
          <div className="form-group">

          <label>● Describe the highlights of National Education Policy NEP 2020 </label>
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>● Your VISION 2025 to realize UNO Sustainable Development Goals for quality Education</label>
          <input
            type="text"
            name="awareness"
            value={formData.awareness}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
        <label>Upload a Recent Passport Size Photo</label>
          {FileUploadField('photo', 'Drag & Drop')}
        </div>

        <hr></hr>
        <br></br>
        
        <button type="submit" className="submit-button">
          Submit
        </button>


      </form>
    </div>
    </div>

    
    
    </>
  );
};

export default NominationForm;
