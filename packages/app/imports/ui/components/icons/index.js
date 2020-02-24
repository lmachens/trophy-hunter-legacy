export { default as ActionGradeIcon } from 'material-ui/svg-icons/action/grade';
export { default as CloseIcon } from 'material-ui/svg-icons/navigation/close';
export { default as DeleteIcon } from 'material-ui/svg-icons/action/delete';
export { default as DoneIcon } from 'material-ui/svg-icons/action/done';
export { default as WarningIcon } from 'material-ui/svg-icons/alert/warning';
export { default as FavoriteBorderIcon } from 'material-ui/svg-icons/action/favorite-border';
export { default as FavoriteIcon } from 'material-ui/svg-icons/action/favorite';
export {
  default as HardwareKeyboardArrowLeftIcon
} from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
export {
  default as HardwareKeyboardArrowRightIcon
} from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
export { default as HelpIcon } from 'material-ui/svg-icons/action/help';
export { default as HomeIcon } from 'material-ui/svg-icons/action/home';
export { default as NavigationCloseIcon } from 'material-ui/svg-icons/navigation/close';
export { default as OpenInNewIcon } from 'material-ui/svg-icons/action/open-in-new';
export { default as PeopleIcon } from 'material-ui/svg-icons/social/people';
export { default as RedeemIcon } from 'material-ui/svg-icons/action/redeem';
export {
  default as RemoveCircleOutlineIcon
} from 'material-ui/svg-icons/content/remove-circle-outline';
export { default as SendIcon } from 'material-ui/svg-icons/content/send';
export { default as SettingsIcon } from 'material-ui/svg-icons/action/settings';
export { default as SocialNotificationsIcon } from 'material-ui/svg-icons/social/notifications';
export {
  default as SocialNotificationsActiveIcon
} from 'material-ui/svg-icons/social/notifications-active';
export {
  default as SocialNotificationsNoneIcon
} from 'material-ui/svg-icons/social/notifications-none';
export { default as StarsIcon } from 'material-ui/svg-icons/action/stars';
export { default as VisibilityIcon } from 'material-ui/svg-icons/action/visibility';
export { default as VisibilityOffIcon } from 'material-ui/svg-icons/action/visibility-off';
export { default as RefreshIcon } from 'material-ui/svg-icons/navigation/refresh';

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import SvgIconV2 from '@material-ui/core/SvgIcon';

export const MinimizeIcon = props => (
  <SvgIcon {...props}>
    <rect height="2" width="14" x="5" y="17" />
  </SvgIcon>
);

export const QuestionIcon = props => (
  <SvgIcon {...props} style={{ height: 24, width: 24 }} viewBox="-6 -6 60 60">
    <g>
      <path d="M24,4c-4.15,0-12,2.508-12,12h6c0-5.567,4.592-6,6-6c1.407,0,6,0.433,6,6c0,1.848-1.275,3.078-3.529,5.092 C23.74,23.533,20,26.875,20,33v2h6v-2c0-3.273,1.698-4.958,4.469-7.435C32.934,23.364,36,20.623,36,16C36,6.508,28.15,4,24,4z" />
      <rect height="6" width="6" x="20" y="38" />
    </g>
  </SvgIcon>
);

export const ForwardIcon = props => (
  <SvgIcon {...props}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
  </SvgIcon>
);

export const BackIcon = props => (
  <SvgIcon {...props}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
  </SvgIcon>
);

export const TwitterIcon = props => (
  <SvgIcon {...props} viewBox="50 50 350 350">
    <path
      d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
			c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
			c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
			c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
			c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
			C97.7,293.1,124.7,301.6,153.6,301.6"
    />
  </SvgIcon>
);

export const VersusIcon = props => (
  <SvgIconV2 {...props} viewBox="0 0 512 512">
    <path d="M134.865 113.46c-7.463.026-15.134 2.977-22.38 8.663-9.658 7.582-18.055 20.015-22.157 35.324-4.102 15.31-3.047 30.274 1.527 41.67 4.575 11.396 12.238 18.958 21.91 21.55 9.67 2.59 20.09-.126 29.75-7.708 9.658-7.583 18.055-20.016 22.157-35.325 4.102-15.31 3.047-30.274-1.527-41.67-4.575-11.396-12.24-18.96-21.91-21.55-2.418-.65-4.882-.965-7.37-.956zm242.27 0c-2.488-.01-4.954.306-7.37.954-9.672 2.59-17.337 10.155-21.91 21.55-4.576 11.397-5.63 26.362-1.527 41.67 4.102 15.31 12.497 27.743 22.156 35.325 9.66 7.58 20.08 10.297 29.75 7.706 9.67-2.59 17.338-10.153 21.912-21.55 4.575-11.395 5.626-26.36 1.524-41.67-4.102-15.308-12.495-27.74-22.154-35.323-7.245-5.686-14.918-8.638-22.38-8.664zM88.387 226.04c-10.146 2.133-18.06 6.477-24.82 12.648-9.882 9.023-17.314 22.553-23.03 39.7-10.6 31.8-15.044 75.344-22.062 120.153H150.97c-.04-44.9-.513-88.924-6.804-121.28-3.203-16.47-7.97-29.787-14.098-38.57-6.872 1.342-13.968 1.24-20.963-.635-8.012-2.147-14.98-6.376-20.718-12.014zm335.226 0c-5.74 5.64-12.705 9.868-20.718 12.015-6.994 1.874-14.09 1.978-20.96.636-6.127 8.785-10.9 22.1-14.1 38.57-6.292 32.356-6.766 76.38-6.804 121.28h132.493c-7.017-44.808-11.462-88.353-22.062-120.153-5.714-17.146-13.145-30.676-23.028-39.7-6.758-6.17-14.672-10.514-24.82-12.646zm-240.615 69.5v23H201v-23h-18.002zm80.002 0v23h18.002v-23H263zm-94.857 41c.18 4.613.313 9.292.425 14h174.864c.112-4.708.248-9.387.427-14H168.142z" />
  </SvgIconV2>
);
