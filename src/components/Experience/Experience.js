import * as React from 'react';
import { Typography, Card, CardContent, Box, Chip, Stack, Divider } from '@mui/material';
import './Experience.css';
import { experiences } from '../../portfolio'

export default function MobileExperienceList() {
  return (
    <div className="mobile-experience-section">
      
      <Stack spacing={2} sx={{ mt: 3 }}>
        {experiences.map((exp) => (
          <Card 
            key={exp.id} 
            className="mobile-experience-card"
            elevation={2}
          >
            <CardContent>
              {/* Role and Company in header */}
              <Box className="card-header">
            
                <p className="job-role"> 
                {exp.role}
                </p>
       
                
                <p className="company-name">
                  {exp.company}
                </p>
              </Box>
              
              {/* Duration with a visual indicator */}
              <Box className="duration-container" sx={{ my: 1 }}>
                <Chip 
                  label={exp.duration} 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                  className="duration-chip"
                />
              </Box>
              
              <Divider sx={{ my: 1.5 }} />
              
              <ul className="job-description" >
                {exp.description.split('.').filter(point => point.trim() !== '').map((point) => (
                  <li key={`${exp.id}-${point.trim().replace(/\s+/g, '-')}`}>
                    {point.trim()}.
                  </li>
                ))}
              </ul>
              
              {/* Skills */}
              <Typography>
                Skills:
              </Typography>
              
              <Box className="skills-wrapper" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exp.skills.map((skill) => (
                  <Chip
                    key={`${exp.id}-${skill}`}
                    label={skill}
                    size="medium"
                    className="skill-chip"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}