import React from 'react';
// Languages
import pythonImage from '../images/python.png';
import javaImage from '../images/java.png'; 
import cppImage from '../images/cplusplus.png';
import cssImage from '../images/css.png';
import htmlImage from '../images/html.png';
import jsImage from '../images/js.png';
import tsImage from '../images/ts.png';
import phpImage from '../images/php.svg';
import csImage from '../images/cs.svg';
// Frameworks & Libraries
import reactImage from '../images/react.png';
import graphqlImage from '../images/graphql.png';
import tailwindImage from '../images/tailwind.svg';
import netImage from '../images/NETCore.svg';
import chakraImage from '../images/chakra.png';
import springbootImage from '../images/springboot.svg';
import nodejsImage from '../images/nodejs.svg';
// Databases
import mysqlImage from '../images/mysql.svg';
import mssqlImage from '../images/mssql.png';
import sqliteImage from '../images/sqlite.png';
import mongoImage from '../images/mongodb.svg';
import dynamoImage from '../images/DynamoDB.png';
// Developer Tools
import gitImage from '../images/git.png';
import awsImage from '../images/aws.png';
import figmaImage from '../images/figma.png';
import dockerImage from '../images/docker.png';
import firebaseImage from '../images/firebase.svg';
import vscImage from '../images/vscode.png';
// Operating systems
import macOSImage from '../images/macos.png';
import linuxImage from '../images/linux.png';
import windowsImage from '../images/windows.png';

function Skills() {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">

        {/* Skill Category 1 */}
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={pythonImage} alt="Python" className="skill-icon" />
              <span className="skill-text">Python</span>
            </div>
            <div className="skill-item">
              <img src={javaImage} alt="Java" className="skill-icon" />
              <span className="skill-text">Java</span>
            </div>
            <div className="skill-item">
              <img src={csImage} alt="Csharp" className="skill-icon" />
              <span className="skill-text">C#</span>
            </div>
            <div className="skill-item">
              <img src={cppImage} alt="C++" className="skill-icon" />
              <span className="skill-text">C++</span>
            </div>
            <div className="skill-item">
              <img src={htmlImage} alt="HTML" className="skill-icon" />
              <span className="skill-text">HTML</span>
            </div>
            <div className="skill-item">
              <img src={cssImage} alt="CSS" className="skill-icon" />
              <span className="skill-text">CSS</span>
            </div>
            <div className="skill-item">
              <img src={jsImage} alt="JavaScript" className="skill-icon" />
              <span className="skill-text">JavaScript</span>
            </div>
            <div className="skill-item">
              <img src={tsImage} alt="TypeScript" className="skill-icon" />
              <span className="skill-text">TypeScript</span>
            </div>
            <div className="skill-item">
              <img src={phpImage} alt="PHP" className="skill-icon" />
              <span className="skill-text">PHP</span>
            </div>
          </div>
        </div>

        {/* Skill Category 2 */}    
        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={reactImage} alt="React" className="skill-icon" />
              <span className="skill-text">React</span>
            </div>
            <div className="skill-item">
              <img src={nodejsImage} alt="Node.js" className="skill-icon" />
              <span className="skill-text">Node.js</span>
            </div>
            <div className="skill-item">
              <img src={springbootImage} alt="Spring Boot" className="skill-icon" />
              <span className="skill-text">Spring Boot</span>
            </div>
            <div className="skill-item">
              <img src={netImage} alt=".NET" className="skill-icon" />
              <span className="skill-text">.NET Core</span>
            </div>
            <div className="skill-item">
              <img src={chakraImage} alt="Chakra UI" className="skill-icon" />
              <span className="skill-text">Chakra UI</span>
            </div>
            <div className="skill-item">
              <img src={tailwindImage} alt="Tailwind" className="skill-icon" />
              <span className="skill-text">Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <img src={graphqlImage} alt="GraphQL" className="skill-icon" />
              <span className="skill-text">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Skill Category 3 */}    
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={mysqlImage} alt="MySQL" className="skill-icon" />
              <span className="skill-text">MySQL</span>
            </div>
            <div className="skill-item">
              <img src={sqliteImage} alt="SQLite" className="skill-icon" />
              <span className="skill-text">SQLite</span>
            </div>
            <div className="skill-item">
              <img src={mssqlImage} alt="MS SQL" className="skill-icon" />
              <span className="skill-text">MS SQL Server</span>
            </div>
            <div className="skill-item">
              <img src={mongoImage} alt="MongoDB" className="skill-icon" />
              <span className="skill-text">MongoDB</span>
            </div>
            <div className="skill-item">
              <img src={dynamoImage} alt="DynamoDB" className="skill-icon" />
              <span className="skill-text">DynamoDB</span>
            </div>
          </div>
        </div>

        {/* Skill Category 4 */}
        <div className="skill-category">
          <h3>Developer Tools</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={gitImage} alt="Git" className="skill-icon" />
              <span className="skill-text">Git</span>
            </div>
            <div className="skill-item">
              <img src={awsImage} alt="AWS" className="skill-icon" />
              <span className="skill-text">AWS</span>
            </div>
            <div className="skill-item">
              <img src={firebaseImage} alt="Firebase" className="skill-icon" />
              <span className="skill-text">Firebase</span>
            </div>
            <div className="skill-item">
              <img src={dockerImage} alt="Docker" className="skill-icon" />
              <span className="skill-text">Docker</span>
            </div>
            <div className="skill-item">
              <img src={vscImage} alt="VS Code" className="skill-icon" />
              <span className="skill-text">VS Code</span>
            </div>
            <div className="skill-item">
              <img src={figmaImage} alt="Figma" className="skill-icon" />
              <span className="skill-text">Figma</span>
            </div>
          </div>
        </div>

        {/* Skill Category 5 */}
        <div className="skill-category">
          <h3>Operating Systems</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={macOSImage} alt="macOS" className="skill-icon" />
              <span className="skill-text">macOS</span>
            </div>
            <div className="skill-item">
              <img src={linuxImage} alt="Linux" className="skill-icon" />
              <span className="skill-text">Linux</span>
            </div>
            <div className="skill-item">
              <img src={windowsImage} alt="Windows" className="skill-icon" />
              <span className="skill-text">Windows</span>
            </div>
          </div>
        </div>
  
      </div>
    </section>
  );
}

export default Skills;
