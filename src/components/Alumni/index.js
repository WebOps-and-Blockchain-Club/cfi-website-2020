import React from "react";
import "./Alumni.css";
export default function Alumni() {
  return (
    <div>
      <div className="alumni hero-title-container">
        <h2>
          Alumni<span className="title-red">.</span>
        </h2>
        <p className="alumni-hero-description">
          CFI has been set up by the generous donation of the batch of 1981.
          Since its inception, alumni groups from different batches have shown
          interest in its activities and have been associated with CFI in
          various ways, from funding teams and donating high end machines to
          mentoring some of the ongoing projects in CFI. Several members of the
          CFI Family have taken their ideas from a nascent project to a
          fully-fledged commercial enterprise.
        </p>
      </div>
      <div className="alumni-card-container">
        <div className="alumni-card">
          <h4>Connect to CFI</h4>
          <p>
            Alumni can connect to CFI through the highlighting events it
            conducts in an academic year.
          </p>
          <ol>
            <li>
              <p>Open House</p>
              <p>
                CFI Open House is an annual event in which all the student
                initiated projects are displayed to alumni and faculty from
                various fields. The event facilitates a great flow of knowledge
                between students and faculties which can drive these projects in
                their right direction. The evening, marked with various
                fun-filled activities is a sign of respect to all alumnus and
                faculty who have contributed to CFI in every possible way.
              </p>
            </li>
            <br />
            <li>
              <p>Reunion Display at ICSR Building</p>
            </li>
          </ol>
        </div>
        <div className="alumni-card">
          <h4>CONTRIBUTE TO CFI</h4>
          <p>Alumni can contribute to CFI through the following ways:</p>
          <ol>
            <li>
              <p>
                Monetary donations can be made through the{" "}
                <a
                  href="https://web.archive.org/web/20190317160842/https://joyofgiving.alumni.iitm.ac.in/projects/cfi-student-projects"
                  target="blank"
                >
                  CFI Joy of Giving Portal
                </a>
                .
              </p>
            </li>
            <br />
            <li>
              <p>
                If you believe you or your organisation shares beliefs with CFI,
                we’d love to get involved with you in context of kind deals or
                monetary sponsorship.
              </p>
            </li>
            <br />
            <li>
              <p>
                We are always in search of mentorship and guidance, and if you
                or your organisation could support our skill and knowledge
                pursuits, we’d be honored to be associated with you.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
