import { styled } from '@mui/material/styles';

export const SearchGamesWrap = styled('div')(({ theme }) => ({
  display: 'grid',
  marginTop: theme.spacing(0.5),
}));

export const ViewAllPageWrap = styled('div')(({ theme }) => ({
  gridTemplateColumns: 'repeat(auto-fill, minmax(var(--game-card-width, auto), 1fr))',
  gap: theme.spacing(0.5),
  zIndex: 0,
  position: 'relative',
}));
