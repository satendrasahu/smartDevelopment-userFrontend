import { memo, useState, useRef, useEffect } from 'react'
import { Grid, InputLabel, InputAdornment, IconButton, Typography, Box, Fab } from '@mui/material/index'
import { useTranslation } from 'react-i18next'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { CustomTextField, useStyles } from './style'
import CheckIcon from '@mui/icons-material/Check'
import { green } from '@mui/material/colors'

const CopyFieldComponent = (props) => {
  const { value, copyTitleMessage, title, handleCopyClick, name, isTextCopied } = props
  const { t } = useTranslation()
  const classes = useStyles()
  const { isCopy, message } = isTextCopied || {}

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const timer = useRef()

  const buttonSx = {
    height: 32,
    width: 32,
    zIndex: 1,
    ...(success && isCopy && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700]
      }

    })
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = window.setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 100)
    }
  }

  return (
    <Grid item xs={12}>
      <Grid className="copy-input-wrap">

        <InputLabel className={classes?.inputLabel}>
          {t(title)}
        </InputLabel>
        <CustomTextField
          type='text'
          className='form-control shadow-none'
          name={name}
          id={name}
          value={value}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>

                <IconButton
                  onClick={handleCopyClick}
                  aria-label='Copy'
                  sx={{ p: 0 }}
                >
                  
                  <Box>
                    <Fab
                      aria-label='save'
                      color='primary'
                      sx={buttonSx}
                      onClick={handleButtonClick}
                    >
                      {success && isCopy ? <CheckIcon fontSize='small' sx={{ height: 20, with: 20 }} /> : <FileCopyIcon fontSize='small' />}
                    </Fab>
                  </Box>

                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>

      {
        success && isCopy
          ? <Typography sx={{ color: green[500], fontSize: 13 }}>{message}</Typography>
          : <Typography sx={{ color: '#57535E', fontSize: 13 }}>{copyTitleMessage}</Typography>
      }
    </Grid>
  )
}

CopyFieldComponent.defaultProps = {
  value: '',
  copyTitleMessage: '',
  title: '',
  name: '',
  handleCopyClick: () => { },
  isTextCopied: {}
}

export default memo(CopyFieldComponent)
