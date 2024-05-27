import { makeStyles } from '@mui/styles'

// import { makeStyles } from '@mui/style'
export const viewAllSubCategoryUseStyle = makeStyles((theme) => ({
  searchGamesWrap: {
    display: 'grid',
    marginTop: theme.spacing(0.5),
  },
  viewAllPageWrap: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(var(--game-card-width, auto), 1fr))',
    gap: theme.spacing(0.5),
    zIndex: 0,
    position: 'relative',
  },
  infiniteScrollLoader: {
    margin: theme.spacing(2, 2, 1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

}))
