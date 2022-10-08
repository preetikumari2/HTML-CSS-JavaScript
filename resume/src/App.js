import logo from './logo.svg';
import './App.css';

let LeftSide=()=>
{
  return(
    
      <div id="details">
      
        <div id="contact">
        <h2 className="contacts">CONTACT</h2><hr id="hr_left"></hr>
        <h3 className="email">Email:</h3>
        <h4 className="emailid">preethi.nisha1999@gmail.com</h4><br></br>
        <h3 className="phone">Phone:</h3>
        <h4 className="phoneNum">9972522152</h4><br />
        <h3 className="add">Address:</h3>
        <h4 className="address">Bidarahalli, Bangalore-560049</h4>
        </div>

        <div id="skills">
        <h2 className="skill">SKILLS</h2><hr id="hr_left"></hr>
        <h3 className="technic">Technical:</h3>
        <h5 className="listoftech">Java <br/>SQl <br/>JavaScript</h5><br></br>
        <h3 className="language">Languages:</h3>
        <h5 className="listoflang">English <br/>Hind <br/>Kannada</h5><br/>
        <h3 className="interest">Interest</h3>
        <h5 className="hobbies">Animation <br/>listening Songs <br/> Cooking <br/>Drawing</h5>
        </div>

        
        
      </div>
     
);
}

const RightSide=()=>
{
  return(
    
      <div id="name">
        <h1 className="myname">Preethi Kumari P</h1>
        <h3 className="be">B.E Computer Science and Engineering</h3><hr></hr><br/>
        <h2 className="profilehead">Profile Summary</h2><hr></hr>
        <p className="profilesumm">To work in an organization to expand my learning, knowledge <br/>and skills and secure a responsible career oppotunity to fully <br/>utilize my training skills, while making a significant contribution <br/>to the success of the company</p>
        <h2 className="expe">EXPERIENCE</h2><hr></hr>
        <h4 className="company">IVY COMPTECH &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2022 - present</h4>
        <h2 className="intership">INTERNSHIP </h2><hr></hr>
        <h4 className="interncomp">FENGAR TECHNOLOGIES &nbsp; &nbsp; &nbsp; &nbsp; 09/2021 - 10/2021 </h4>
        <p className="internsumm">Joined the internship and got trained about blockchain <br/>technologies and created a peoject known as "Dynamic <br/>NFT creation using Chainlink"</p>
        <h2 className="project">Projects</h2>
        <h4 className="projname1">Multi-model image classification using transfer <br/>learning and autoML</h4>
        <p className="proj1summ">Using CT-scan and X-ray if finds out whether <br/>Covid +ve or Non-Covid</p>
        <h4 className="projname2">Online Musical Instruments</h4>
        <p className="proj2summ">The project is developed for the user to have a breif look <br/>at instruments and the pricing of that and booking <br/>order without actually visiting the store</p>
        <h2 className="education">EDUCATION</h2>
        <h4 className="degreeclg">Vijaya Vittala Institute of Technology</h4>
        <p className="grad">Graduated with Distinction</p>
        <h4 className="puclg">Shree Venkateshwara PU Collage</h4>
        <p className="puc">PUC</p>
        <h2 className="certificate">CERTIFICATES</h2>
        <p className="iot">Certificate on IOT</p>
        <p className="blockchain">Certificate on Blockchain Technology</p>

      </div>   
  );
}


function App() {
  return (
    <div className="App">
      <LeftSide /> 
       <RightSide /> 
      
    </div>
  );
}

export default App;
