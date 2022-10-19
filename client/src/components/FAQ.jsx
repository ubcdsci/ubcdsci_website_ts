import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles/Accordion.scss";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why should I join UBC DataSci?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Join UBC DataSci to: <br></br>
            1. Learn data science through{" "}
            <strong>
              <code>team-based projects</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>competitions</code>
            </strong>{" "}
            <br></br>
            2.{" "}
            <strong>
              <code>Build something great</code>
            </strong>
            , no matter your experience level <br></br>
            3. Gain{" "}
            <strong>
              <code>employable data science skills</code>
            </strong>{" "}
            <br></br>
            4. Learn about{" "}
            <strong>
              <code>cutting edge data science techniques</code>
            </strong>{" "}
            and their
            <strong>
              <code>applications</code>
            </strong>{" "}
            <br></br>
            5. Develop{" "}
            <strong>
              <code>teamwork</code>
            </strong>{" "}
            &{" "}
            <strong>
              <code>communication skills</code>
            </strong>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I become a member?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fill out the membership form right here!{" "}
            <a
              href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>
                https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC
              </code>
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            I have no data science experience, can I still participate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes!! Our club believes that data science is best learn through{" "}
            <code>hands on projects</code>, so join a project group today :))
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can I join a project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To join a project group, first sign up through our{" "}
            <a
              href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>registration link</code>
            </a>
            , then fill out the pinned form in the <code>#announcement</code>{" "}
            channel of our club{" "}
            <a
              href="https://discord.com/invite/4AycB34acK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Discord</code>.
            </a>
            <br />
            <br />
            Learn more about our ongoing projects{" "}
            <a href="/projects">
              <code>here</code>
            </a>
            !
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What's does a project lead do and how do I become one??
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A project lead has two primary roles: <br></br>
            1) <strong>Advancing the progress of a project</strong> /
            competition by managing / co-managing a team of members on the
            project, and <br></br>
            2) <strong>interfacing with the exec team</strong> to ensure that
            the goals are in line with the broader mission of the team.{" "}
            <br></br>
            <br></br>After participating as an active member of a project for at
            least <strong>one semester</strong>, members can become leads of
            their own project provided a recommendation by their project lead.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#5aff67" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are the club projects open-source?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For the time being, project source code will remain{" "}
            <strong>closed</strong>. In the future we may make some completed
            projects open-source, but due to our collaborations with other
            organizations on projects it will be on a{" "}
            <strong>per-project basis</strong>. For an up to date view on our
            public work, check out our github:{" "}
            <code>https://github.com/ubcdsci/</code>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
