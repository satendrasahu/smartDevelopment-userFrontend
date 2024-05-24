import { DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material'

// import { notificationRoot } from 'assets/dom/domNodes'
import { StyledDialog } from './styles'
import { PrimaryButton, SecondaryButton } from '../../assets/css/common.styles'

export const DialogComponent = ({
  dialogOpen,
  handleDialogClose,
  handleAgreeConfirm,
  title,
  subTitle,
  children,
  secondaryButtonTitle,
  primaryButtonTitle,
  fullWidth,
  maxWidth,
  fullScreen,
  className
}) => {
  return (
    <StyledDialog
      open={dialogOpen}
      onClose={handleDialogClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      className={className}
    >
      {!children
        ? (
          <>
            <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                {subTitle}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <SecondaryButton id='cancel-action' variant='contained' onClick={handleDialogClose}>
                {secondaryButtonTitle}
              </SecondaryButton>
              <PrimaryButton variant='contained' id='confirm-action' onClick={handleAgreeConfirm}>
                {primaryButtonTitle}
              </PrimaryButton>
            </DialogActions>
          </>
        )
        : (
          children
        )}
    </StyledDialog>
  )
}