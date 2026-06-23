import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  NativeSelect,
  Grid,
  Slider,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

interface LocalizationRulesProps {
  timezone?: string;
  currency?: string;
  rounding?: number;
  onApplySettings?: (settings: { timezone: string; currency: string; rounding: number }) => void;
  onUploadLogo?: (file: File) => void;
}

export const LocalizationRules: React.FC<LocalizationRulesProps> = ({
  timezone = 'UTC -05:00 (Eastern Time)',
  currency = 'USD - US Dollar',
  rounding = 15,
  onApplySettings,
  onUploadLogo,
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState(timezone);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);
  const [roundingValue, setRoundingValue] = useState(rounding);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleApply = () => {
    if (onApplySettings) {
      onApplySettings({
        timezone: selectedTimezone,
        currency: selectedCurrency,
        rounding: roundingValue,
      });
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onUploadLogo) {
      onUploadLogo(e.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#141414',
        border: '1px solid #2E2E2E',
        p: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          fontWeight: 700,
          color: 'text.secondary',
          opacity: 0.5,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          mb: 4,
        }}
      >
        Global Localization & Rule Constraints
      </Typography>

      <Grid container spacing={5}>
        {/* Brand Identity Asset Loader */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={3} alignItems="center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
              accept=".svg,.png"
            />
            <Box
              onClick={handleUploadClick}
              sx={{
                width: 128,
                height: 128,
                bgcolor: '#000000',
                border: '1px dashed #404040',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.15s ease-in-out',
                '&:hover': {
                  borderColor: '#ffffff',
                  '& .upload-icon': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <UploadIcon
                className="upload-icon"
                sx={{
                  color: '#ffffff',
                  opacity: 0.3,
                  mb: 1,
                  fontSize: 24,
                  transition: 'transform 0.15s ease-in-out',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: 'text.secondary',
                  opacity: 0.4,
                  fontWeight: 500,
                }}
              >
                UPLOAD LOGO
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  mb: 0.5,
                }}
              >
                Global Identity Assets
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: 'text.secondary',
                  opacity: 0.4,
                  lineHeight: 1.5,
                  mb: 2,
                }}
              >
                Manage system-wide brand marks. Formats: SVG, PNG (Transparent) min 512px.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 16, height: 16, bgcolor: '#ffffff', border: '1px solid #2E2E2E' }} />
                <Box sx={{ width: 16, height: 16, bgcolor: '#2E2E2E', border: '1px solid #2E2E2E' }} />
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* Selectors & Rules */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={3}>
                <Box>
                  <Typography
                    component="label"
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: 'text.secondary',
                      opacity: 0.4,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    SYSTEM NATIVE TIMEZONE
                  </Typography>
                  <NativeSelect
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    disableUnderline
                    sx={{
                      width: '100%',
                      bgcolor: '#000000',
                      border: '1px solid #2E2E2E',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      '& select': {
                        py: 1.5,
                        px: 2,
                        bgcolor: 'transparent',
                        color: '#ffffff',
                        width: '100%',
                      },
                      '&:focus-within': {
                        borderColor: '#ffffff',
                      },
                    }}
                  >
                    <option value="UTC -05:00 (Eastern Time)" style={{ backgroundColor: '#000000' }}>UTC -05:00 (Eastern Time)</option>
                    <option value="UTC +00:00 (London/GMT)" style={{ backgroundColor: '#000000' }}>UTC +00:00 (London/GMT)</option>
                    <option value="UTC +08:00 (Singapore)" style={{ backgroundColor: '#000000' }}>UTC +08:00 (Singapore)</option>
                  </NativeSelect>
                </Box>

                <Box>
                  <Typography
                    component="label"
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: 'text.secondary',
                      opacity: 0.4,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    BASE OPERATIONAL CURRENCY
                  </Typography>
                  <Stack direction="row">
                    <Box
                      sx={{
                        bgcolor: '#343535',
                        border: '1px solid #2E2E2E',
                        borderRight: 'none',
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: '#ffffff',
                      }}
                    >
                      $
                    </Box>
                    <NativeSelect
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      disableUnderline
                      sx={{
                        flex: 1,
                        bgcolor: '#000000',
                        border: '1px solid #2E2E2E',
                        color: '#ffffff',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        '& select': {
                          py: 1.5,
                          px: 2,
                          bgcolor: 'transparent',
                          color: '#ffffff',
                          width: '100%',
                        },
                        '&:focus-within': {
                          borderColor: '#ffffff',
                        },
                      }}
                    >
                      <option value="USD - US Dollar" style={{ backgroundColor: '#000000' }}>USD - US Dollar</option>
                      <option value="EUR - Euro" style={{ backgroundColor: '#000000' }}>EUR - Euro</option>
                      <option value="GBP - British Pound" style={{ backgroundColor: '#000000' }}>GBP - British Pound</option>
                    </NativeSelect>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack spacing={3} sx={{ height: '100%', justifyContent: 'space-between' }}>
                <Box>
                  <Typography
                    component="label"
                    sx={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: 'text.secondary',
                      opacity: 0.4,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    BILLING TIME ROUNDING (MIN)
                  </Typography>
                  <Stack direction="row" spacing={3} alignItems="center" sx={{ height: 48 }}>
                    <Slider
                      value={roundingValue}
                      min={1}
                      max={60}
                      step={1}
                      onChange={(_, val) => setRoundingValue(val as number)}
                      sx={{
                        color: '#ffffff',
                        height: 4,
                        py: 0,
                        '& .MuiSlider-track': {
                          border: 'none',
                          bgcolor: '#ffffff',
                        },
                        '& .MuiSlider-rail': {
                          bgcolor: '#2E2E2E',
                          opacity: 1,
                        },
                        '& .MuiSlider-thumb': {
                          height: 16,
                          width: 16,
                          backgroundColor: '#ffffff',
                          border: '1px solid #000000',
                          boxShadow: 'none',
                          '&:focus, &:hover, &.Mui-active': {
                            boxShadow: 'none',
                          },
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        width: 48,
                        textAlign: 'right',
                      }}
                    >
                      {roundingValue}m
                    </Typography>
                  </Stack>
                </Box>

                <Button
                  onClick={handleApply}
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#343535',
                    color: '#ffffff',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    fontSize: '11px',
                    borderRadius: 0,
                    py: 1.75,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    '&:hover': {
                      bgcolor: '#ffffff',
                      color: '#000000',
                    },
                    transition: 'all 0.15s ease-in-out',
                  }}
                >
                  Apply Global Rules
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
