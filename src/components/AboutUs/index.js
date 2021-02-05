import React from "react";
import { Card } from "antd";

export default () => {
  return (
    <div id="about-us">
      <div className="hero">
        <div className="hero-title-container">
          <h2 id="title">
            About <span className="title-red">Us.</span>
          </h2>
          <p>
            Centre for Innovation (CFI) is a ‘Student Lab’ at IIT Madras. Set up
            with funds donated by the batch of 1981, it is set in the building
            that houses the Central Workshop, right in the middle of the
            academic zone in the beautiful IIT Madras Campus.
            <br />
            <br />
            <Card hoverable={true} className="card" bordered={false}>
              <h1 className="title-red">Vision</h1>
              “To promote informal learning and foster innovation and invention
              in technology, with a focus on technologies aimed at contributing
              positively to the environment and to the society”
            </Card>
            <br />
            <br />
            CFI was started in 2008 with an objective to be a forum for creative
            output of the budding engineers of IIT Madras. It provides students
            the necessary platform for realizing their ideas. A great workspace,
            a comprehensive inventory, ample guidance from faculty &amp;
            senior-students and the zeal and passion of the CFI team make CFI a
            gifted asset for IIT Madras students. And over time, CFI has
            successfully evolved into a hub which encourages thinking and
            provokes students to generate novel ideas making it truly the
            “centre” for innovation.
            <br />
            <br />
            The CFI vision is being achieved by espousing three major concepts.
            <br />
            <br />
            <Card hoverable={true} className="card" bordered={false}>
              <h1 className="title-red">
                Walk in with an idea, walk out with a product
              </h1>
              Among the general demographic, students are more likely to come up
              with new, creative and outrageous ideas. Add to this the fact that
              students at IIT Madras are competent in engineering studies, we
              get a potent mix of creative and skilled set of people who are
              ready to innovate. To realize these strengths of the student
              community, the CFI will provide the right environment and
              resources. CFI will try to be a place where a student can ‘walk in
              with an idea and walk out with a product’. The innovation itself
              is sometimes only a small part of the story as it encourages
              students to think freely. Free thinking leaders are an asset to
              and future leaders of any society.
            </Card>
            <br />
            <br />
            <Card hoverable={true} className="card" bordered={false}>
              <h1 className="title-red">Support large student team projects</h1>
              CFI will support large student projects. These projects maybe for
              international contests such as Formula-SAE, University Rover
              Challenge, Intelligent Ground Vehicle Challenge or the famous
              Hyperloop Competition. They may also be for showcasing Shaastra
              series of Spirit of Engineering (SoE) projects. Such projects
              encourage teamwork and build character and confidence in the
              students and serve as inspiration to other students.
              <br />
              <br />
              India is increasingly aware that for uniform progress, we have to
              look for solutions to problems in the villages and other sub-urban
              societies. These solutions are unlikely to come from outside India
              as the problems themselves are very India specific. CFI intends to
              encourage students to look at socially relevant projects.
              Additionally, the CFI will also encourage projects that look at
              environment friendly solutions.
            </Card>
            <br />
            <br />
            <Card hoverable={true} className="card" bordered={false}>
              <h1 className="title-red">A futuristic lab environment</h1>
              The interiors of CFI are being developed in collaboration with a
              celebrated green architect. The interiors are being designed to
              stimulate creative thinking, to be non-linear and adaptive, to be
              informal and ice-cream shop relaxing. The most important part of
              the innovation process is free thinking and the interiors of CFI
              aims at giving that freedom to its users. CFI will have large
              empty spaces. Large empty spaces serve as areas which clear up
              mental clutter, especially when users are in a creative block.
              They also serve as space for future expansion. CFI will also have
              a gallery that will showcase successful projects.
            </Card>
          </p>
        </div>
      </div>
    </div>
  );
};
