import React, { useEffect, useState } from 'react';
import { Avatar, Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { updateUserProfileThunk } from '../../../redux/thunks/profile/profilePic.thunk';
import { colors } from '../../../theme/colors';
import { SecondaryText } from '../../../assets/css/common.styles';
import AlertPopup from '../../../components/ui_kit/Popup/AlertPopup';

const ProfilePic = () => {
	const [uploadedImage, setUploadedImage] = useState(null);
	const [isHovering, setIsHovering] = useState(false);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { updateUserProfilePicLoader, user } = useSelector(
		(state) => state?.user || {}
	);

	const [alertPopup, setAlertPopup] = useState({
		isOpen: false,
		message: '',
		alertName: '',
		messageType: 'success',
	});
	const handleAlertPopupClose = () => {
		setAlertPopup({ isOpen: false });
	};
	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);
	const handleImageUpload = (event) => {
		const file = event.target.files[0];

		if (file) {
			const fileExtension = file.name.split('.').pop();
			const allowedExtensions = ['jpg', 'jpeg', 'png'];
			const maxSize = 2097152; // 2MB in bytes

			if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
				setAlertPopup({
					...alertPopup,
					isOpen: true,
					messageType: 'error',
					message: t('fileAllowedFormat', { files: 'PNG, JPEG, JPG' }),
				});
				return;
			}
			if (file.size > maxSize) {
				setAlertPopup({
					...alertPopup,
					isOpen: true,
					messageType: 'error',
					message: t('fileAllowedSize', { fileSize: '2 MB' }),
				});
				return;
			}

			const formData = new FormData();
			formData.append('profileImage', file);
			const imageUrl = URL.createObjectURL(file);
			dispatch(updateUserProfileThunk(formData)).then(({ payload }) => {
				if (payload?.success) {
					setUploadedImage(payload?.profileImage || imageUrl);
				}
			});
		} else {
			console.error('No file selected');
		}
	};

	const handleRemoveImage = () => {
		dispatch(updateUserProfileThunk({ profileImage: null }));
		setUploadedImage(null);
	};

	useEffect(() => {
		setUploadedImage(user?.profileImage);
	}, [user]);

	return (
		<Box
			sx={{
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '1rem',
				margin: '1rem auto',
				position: 'relative',
				width: 'fit-content',
				borderRadius: '50%',
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{updateUserProfilePicLoader ? (
				<CircularProgress
					size={95}
					sx={{
						color: colors.primary.btnColor,
					}}
				/>
			) : (
				<Avatar
					alt={user?.username}
					src={uploadedImage}
					sx={{
						width: 150,
						height: 150,
						cursor: 'pointer',
						textTransform: 'capitalize',
						backgroundColor: 'lightgray',
						color: 'black',
						fontSize: '1rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transition: 'all 1s ease-in-out',
						position: 'relative',
						'&:hover': {
							borderRadius: '2% !important',
							width: 220,
							height: 220,
							transition: 'all 1s ease-in-out',
						},
						'&::after': isHovering
							? {
									content: `"${t('uploadNewImage')}"`,
									position: 'absolute',
									bottom: 0,
									color: colors.extra.whiteColor,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '14px',
									backgroundColor: colors.primary.btnColor,
									width: '100%',
									padding: '0.3rem',
								}
							: {},
					}}
					onClick={() => document.getElementById('imageUploadInput').click()}
				>
					{!isHovering && (
						<SecondaryText
							props={{
								whiteSpace: 'nowrap', // Prevent line breaks
								overflow: 'hidden', // Hide overflow
								textOverflow: 'ellipsis', //
								color: colors.extra.darkColor,
							}}
						>
							{`${user?.firstName || ''} ${user?.lastName || ''}`}
						</SecondaryText>
					)}
				</Avatar>
			)}

			{uploadedImage && (
				<SecondaryText
					props={{
						fontSize: '0.5rem',
						fontWeight: 400,
						marginTop: '0.25rem',
						cursor: 'pointer',
					}}
					onClick={handleRemoveImage}
					color="error"
				>
					{updateUserProfilePicLoader ? t('uploading') : t('removeImage')}
				</SecondaryText>
			)}

			<input
				id="imageUploadInput"
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				onChange={handleImageUpload}
			/>

			<SecondaryText props={{ fontSize: 10 }}>
				{t('fileAllowed', {
					files: 'PNG, JPEG, JPG',
					size: '2 MB',
				})}
			</SecondaryText>

			<AlertPopup
				open={alertPopup?.isOpen}
				onClose={handleAlertPopupClose}
				message={t(alertPopup?.message)}
				type={alertPopup?.messageType}
				minHeight={'auto'}
			/>
		</Box>
	);
};

export default ProfilePic;
