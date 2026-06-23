import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export interface Recommendation {
  id: string;
  type: 'revenue' | 'staff' | 'asset' | string;
  title: string;
  description: string;
  icon: string;
  hasAction?: boolean;
  actionText?: string;
}

export interface AiRecommendationsProps {
  title?: string;
  recommendations?: Recommendation[];
  onExecuteAction?: (id: string) => void;
}

const defaultRecommendations: Recommendation[] = [
  {
    id: 'rec-1',
    type: 'revenue',
    title: 'Revenue Opportunity',
    description: 'Increase dynamic pricing for Peak Table Demand Friday 20:00 - 23:00 (+15% projected yields).',
    icon: 'rocket_launch',
    hasAction: true,
    actionText: 'EXECUTE ACTION',
  },
  {
    id: 'rec-2',
    type: 'staff',
    title: 'Staff Optimization',
    description: 'Projected spillover in Lounge Area. Reassign 2 floor staff from Central Tables at 21:00.',
    icon: 'group',
    hasAction: false,
  },
  {
    id: 'rec-3',
    type: 'asset',
    title: 'Asset & Equipment Lifecycles',
    description: 'Table 04 has hit 120 hours of active play this month. Felt leveling and cue tip replacement recommended within 48 hours.',
    icon: 'build',
    hasAction: false,
  },
];

export const AiRecommendations: React.FC<AiRecommendationsProps> = ({
  title = 'AI Recommendations',
  recommendations = defaultRecommendations,
  onExecuteAction,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1b1c1c', // surface-container-low
        border: '1px solid #444748', // outline-variant
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ p: 3, borderBottom: '1px solid #444748' }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            fontWeight: 700,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {recommendations.map((rec) => {
          const isRevenue = rec.type === 'revenue';
          return (
            <Box
              key={rec.id}
              sx={{
                p: 2,
                border: '1px solid #444748',
                backgroundColor: isRevenue ? 'rgba(52, 53, 53, 0.5)' : 'rgba(52, 53, 53, 0.3)',
                transition: 'border-color 0.15s ease-in-out',
                '&:hover': {
                  borderColor: isRevenue ? '#ffffff' : '#8e9192',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box
                  component="span"
                  className="material-symbols-outlined"
                  sx={{
                    fontSize: '14px',
                    color: isRevenue ? '#ffffff' : '#c4c7c8',
                  }}
                >
                  {rec.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: isRevenue ? '#ffffff' : '#c4c7c8',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {rec.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.4',
                  color: '#e3e2e2',
                  mb: rec.hasAction ? 2 : 0,
                }}
              >
                {rec.description}
              </Typography>

              {rec.hasAction && (
                <Button
                  onClick={() => onExecuteAction?.(rec.id)}
                  sx={{
                    width: '100%',
                    py: 1,
                    backgroundColor: '#ffffff',
                    color: '#121414',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 700,
                    borderRadius: 0,
                    letterSpacing: '0.08em',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: 'none',
                    },
                  }}
                  variant="contained"
                >
                  {rec.actionText || 'EXECUTE ACTION'}
                </Button>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
