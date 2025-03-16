import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography, Box, Chip, Paper } from '@mui/material';

import './Experience.css';

export const experiences = [
  {
    id: 'exp-1',
    role: 'Software Development Engineer',
    company: 'XYZ Startup',
    duration: 'Jan 2024 – Present',
    description: 'Working on building scalable backend systems and improving product performance.',
    skills: ['Node.js', 'AWS', 'MongoDB', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Software Engineering Intern',
    company: 'ABC Corp',
    duration: 'May 2023 – Dec 2023',
    description: 'Developed new features and optimized existing codebase for better performance.',
    skills: ['React', 'TypeScript', 'GraphQL']
  },
  {
    id: 'exp-3',
    role: 'Freelance Game Developer',
    company: 'Independent',
    duration: '2022 – 2023',
    description: 'Created small games and participated in multiple game jams, building a portfolio on itch.io.',
    skills: ['Unity', 'C#', 'Blender', 'Game Design']
  }
];

export default function WorkExperienceTimeline() {
  return (
    <div className="timeline-section">
      <Typography 
        variant="h4" 
        gutterBottom 
        className="section-title"
      >
        Professional Experience
      </Typography>

      <Timeline position="alternate" sx={{ mt: 4 }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id}>
            {/* Left Side (Duration) */}
            <TimelineOppositeContent
              className="timeline-duration"
              align="right"
              variant="body2"
            >
              {exp.duration}
            </TimelineOppositeContent>

            {/* Connector and Dot */}
            <TimelineSeparator>
              {index !== 0 && (
                <TimelineConnector className="timeline-connector" />
              )}
              <TimelineDot className="timeline-dot" />
              {index !== experiences.length - 1 && (
                <TimelineConnector className="timeline-connector" />
              )}
            </TimelineSeparator>

            {/* Right Side (Content) */}
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Paper className="experience-card">
                {/* Job Role */}
                <Typography
                  variant="h6"
                  component="span"
                  className="job-role"
                >
                  {exp.role}
                </Typography>

                {/* Company */}
                <Typography
                  variant="subtitle1"
                  className="company-name"
                >
                  {exp.company}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  className="job-description"
                >
                  {exp.description}
                </Typography>

                {/* Skills with Alternate Alignment */}
                <Box
                  className={`skills-container ${index % 2 === 0 ? 'align-start' : 'align-end'}`}
                >
                  {exp.skills.map((skill) => (
                    <Chip
                      key={`${exp.id}-${skill}`}
                      label={skill}
                      size="small"
                      className="skill-chip"
                    />
                  ))}
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}