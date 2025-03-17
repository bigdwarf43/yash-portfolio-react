import * as React from 'react';
import { Typography, Card, CardContent, Box, Chip, Stack, Divider } from '@mui/material';
import './Experience.css';
import { experiences } from '../../portfolio'

export default function MobileExperienceList() {
  return (
    <div className="mobile-experience-section">
      <Typography 
        variant="h4" 
        gutterBottom 
        className="section-title"
      >
        Professional Experience
      </Typography>
      
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
                <Typography
                  variant="h6"
                  component="div"
                  className="job-role"
                >
                  {exp.role}
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  className="company-name"
                  color="text.secondary"
                >
                  {exp.company}
                </Typography>
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
              
              {/* Description */}
              <Typography
                variant="body2"
                className="job-description"
                sx={{ mb: 2 }}
              >
                {exp.description}
              </Typography>
              
              {/* Skills */}
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Skills:
              </Typography>
              
              <Box className="skills-wrapper" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exp.skills.map((skill) => (
                  <Chip
                    key={`${exp.id}-${skill}`}
                    label={skill}
                    size="small"
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