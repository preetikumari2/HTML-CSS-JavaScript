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
        <h4 className="listoftech">Java, SQl, JavaScript</h4><br></br>
        <h3 className="language">Languages:</h3>
        <h4 className="listoflang">English, Hindi, Kannada</h4><br />
        <h3 className="interset">Interest</h3>
        <h4 className="hobbies">Animation, listening Songs, Cooking, Drawing</h4>
        </div>

        
        
      </div>
     
);
}

const RightSide=()=>
{
  return(
    
      <div id="name">
        <h1>Preethi Kumari P</h1>
        <h3>B.E Computer Science and Engineering</h3><hr></hr><br/>
        <h2>Profile Summary</h2><hr></hr>
        <p>To work in an organization to expand my learning, knowlwdge and skills and secure a responsible career oppotunity to fully utilize my training skills, while making a significant contribution to the success of the company</p>
        <h2>EXPERIENCE</h2><hr></hr>
        <p>IVY COMPTECH &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2022 - present</p>
        <h2>INTERNSHIP </h2><hr></hr>
        <p>FENGAR TECHNOLOGIES &nbsp; &nbsp; &nbsp; &nbsp; 09/2021 - 10/2021 </p>
        <p>Joined the internship and got trained about blockchain technologies and created a peoject known as "Dynamic NFT creation using Chainlink"</p>
        <h2>projects:</h2>
        <h4>Multi-model image classification using transfer learning and autoML</h4>
        <p>Using CT-scan and X-ray if finds out whether Covid +ve or Non-Covid</p>
        <h4>Online Musical Instruments</h4>
        <p>The project is developed for the user to have a breif look at instruments and the pricing of that and booking order without actually visiting the store</p>
        <h2>EDUCATION</h2>
        <h4>Vijaya Vittala Institute of Technology</h4>
        <p>Graduated with Distinction</p>
        <h4>Shree Venkateshwara PU Collage</h4>
        <p>PUC</p>
        <h2>CERTIFICATES</h2>
        <p>Certificate on IOT</p>
        <p>Certificate on Blockchain Technology</p>

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
