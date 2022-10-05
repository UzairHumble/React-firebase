import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return (
    <div>
      <div className='container'>
        <div className='name'>
          <h1>
            <u>Uzair Malik </u>
          </h1>

          <h2>
            <u>Education</u>
          </h2>
          <p>Matriculation from Programmer School.</p>
          <p>Intermediate from Jinah College Nazimabad.</p>
          <p>Bachelor's in CS from Federal Urdu University (2022 - Present)</p>

          <h2>
            <u>Skills</u>
          </h2>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>BootStrap</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Github here</li>
          </ul>

          <h2>
            <u>Contacts</u>
          </h2>
          <p>
            <a
              href='https://www.linkedin.com/in/uzair-malik-ba3270247/'
              target='blank'
            >
              Connect with LinkedIn
            </a>
          </p>
          <p>
            <a href='tel:+923092841742'>+923092841742 (Mobile)</a>
          </p>
          <p>
            <a href='https://Wa.me/+923092841742' target='blank'>
              +92 30932841742 (WhatsApp)
            </a>
          </p>
          <p>
            <a href='mailto:Uzairmalik2329@gmail.com' target='blank'>
              Uzairmalik2329@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector('#root'));
