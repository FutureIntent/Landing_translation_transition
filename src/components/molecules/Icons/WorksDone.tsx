import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const WorksDone = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 47 60" {...rest} fill="none">
        <path d="M39.0198 7.37139L32.189 0.540615C32.0156 0.3682 31.8098 0.231696 31.5835 0.138921C31.3573 0.0461461 31.1149 -0.00107736 30.8703 -4.44501e-05H1.84615C1.35706 0.00169303 0.888491 0.196756 0.542646 0.542601C0.1968 0.888447 0.00173748 1.35701 0 1.84611L0 50.9011C0.00173748 51.3902 0.1968 51.8587 0.542646 52.2046C0.888491 52.5504 1.35706 52.7455 1.84615 52.7472H37.7143C38.2034 52.7455 38.672 52.5504 39.0178 52.2046C39.3637 51.8587 39.5587 51.3902 39.5605 50.9011V8.70326C39.5632 8.45648 39.5169 8.21163 39.424 7.98296C39.3312 7.7543 39.1938 7.5464 39.0198 7.37139ZM9.23077 34.945H6.59341C6.24367 34.945 5.90826 34.8061 5.66096 34.5588C5.41366 34.3115 5.27473 33.9761 5.27473 33.6263C5.27473 33.2766 5.41366 32.9412 5.66096 32.6939C5.90826 32.4466 6.24367 32.3077 6.59341 32.3077H9.23077C9.58051 32.3077 9.91592 32.4466 10.1632 32.6939C10.4105 32.9412 10.5495 33.2766 10.5495 33.6263C10.5495 33.9761 10.4105 34.3115 10.1632 34.5588C9.91592 34.8061 9.58051 34.945 9.23077 34.945ZM9.23077 29.011H6.59341C6.24367 29.011 5.90826 28.872 5.66096 28.6247C5.41366 28.3774 5.27473 28.042 5.27473 27.6923C5.27473 27.3425 5.41366 27.0071 5.66096 26.7598C5.90826 26.5125 6.24367 26.3736 6.59341 26.3736H9.23077C9.58051 26.3736 9.91592 26.5125 10.1632 26.7598C10.4105 27.0071 10.5495 27.3425 10.5495 27.6923C10.5495 28.042 10.4105 28.3774 10.1632 28.6247C9.91592 28.872 9.58051 29.011 9.23077 29.011ZM9.23077 23.0769H6.59341C6.24367 23.0769 5.90826 22.938 5.66096 22.6907C5.41366 22.4434 5.27473 22.1079 5.27473 21.7582C5.27473 21.4085 5.41366 21.0731 5.66096 20.8258C5.90826 20.5785 6.24367 20.4395 6.59341 20.4395H9.23077C9.58051 20.4395 9.91592 20.5785 10.1632 20.8258C10.4105 21.0731 10.5495 21.4085 10.5495 21.7582C10.5495 22.1079 10.4105 22.4434 10.1632 22.6907C9.91592 22.938 9.58051 23.0769 9.23077 23.0769ZM9.23077 17.1428H6.59341C6.24367 17.1428 5.90826 17.0039 5.66096 16.7566C5.41366 16.5093 5.27473 16.1739 5.27473 15.8241C5.27473 15.4744 5.41366 15.139 5.66096 14.8917C5.90826 14.6444 6.24367 14.5055 6.59341 14.5055H9.23077C9.58051 14.5055 9.91592 14.6444 10.1632 14.8917C10.4105 15.139 10.5495 15.4744 10.5495 15.8241C10.5495 16.1739 10.4105 16.5093 10.1632 16.7566C9.91592 17.0039 9.58051 17.1428 9.23077 17.1428ZM9.23077 11.2088H6.59341C6.24367 11.2088 5.90826 11.0698 5.66096 10.8225C5.41366 10.5752 5.27473 10.2398 5.27473 9.89007C5.27473 9.54033 5.41366 9.20492 5.66096 8.95762C5.90826 8.71032 6.24367 8.57139 6.59341 8.57139H9.23077C9.58051 8.57139 9.91592 8.71032 10.1632 8.95762C10.4105 9.20492 10.5495 9.54033 10.5495 9.89007C10.5495 10.2398 10.4105 10.5752 10.1632 10.8225C9.91592 11.0698 9.58051 11.2088 9.23077 11.2088ZM32.3077 34.945H13.8462C13.4964 34.945 13.161 34.8061 12.9137 34.5588C12.6664 34.3115 12.5275 33.9761 12.5275 33.6263C12.5275 33.2766 12.6664 32.9412 12.9137 32.6939C13.161 32.4466 13.4964 32.3077 13.8462 32.3077H32.3077C32.6574 32.3077 32.9929 32.4466 33.2402 32.6939C33.4875 32.9412 33.6264 33.2766 33.6264 33.6263C33.6264 33.9761 33.4875 34.3115 33.2402 34.5588C32.9929 34.8061 32.6574 34.945 32.3077 34.945ZM32.3077 29.011H13.8462C13.4964 29.011 13.161 28.872 12.9137 28.6247C12.6664 28.3774 12.5275 28.042 12.5275 27.6923C12.5275 27.3425 12.6664 27.0071 12.9137 26.7598C13.161 26.5125 13.4964 26.3736 13.8462 26.3736H32.3077C32.6574 26.3736 32.9929 26.5125 33.2402 26.7598C33.4875 27.0071 33.6264 27.3425 33.6264 27.6923C33.6264 28.042 33.4875 28.3774 33.2402 28.6247C32.9929 28.872 32.6574 29.011 32.3077 29.011ZM32.3077 23.0769H13.8462C13.4964 23.0769 13.161 22.938 12.9137 22.6907C12.6664 22.4434 12.5275 22.1079 12.5275 21.7582C12.5275 21.4085 12.6664 21.0731 12.9137 20.8258C13.161 20.5785 13.4964 20.4395 13.8462 20.4395H32.3077C32.6574 20.4395 32.9929 20.5785 33.2402 20.8258C33.4875 21.0731 33.6264 21.4085 33.6264 21.7582C33.6264 22.1079 33.4875 22.4434 33.2402 22.6907C32.9929 22.938 32.6574 23.0769 32.3077 23.0769ZM32.3077 17.1428H13.8462C13.4964 17.1428 13.161 17.0039 12.9137 16.7566C12.6664 16.5093 12.5275 16.1739 12.5275 15.8241C12.5275 15.4744 12.6664 15.139 12.9137 14.8917C13.161 14.6444 13.4964 14.5055 13.8462 14.5055H32.3077C32.6574 14.5055 32.9929 14.6444 33.2402 14.8917C33.4875 15.139 33.6264 15.4744 33.6264 15.8241C33.6264 16.1739 33.4875 16.5093 33.2402 16.7566C32.9929 17.0039 32.6574 17.1428 32.3077 17.1428ZM32.3077 11.2088H13.8462C13.4964 11.2088 13.161 11.0698 12.9137 10.8225C12.6664 10.5752 12.5275 10.2398 12.5275 9.89007C12.5275 9.54033 12.6664 9.20492 12.9137 8.95762C13.161 8.71032 13.4964 8.57139 13.8462 8.57139H32.3077C32.6574 8.57139 32.9929 8.71032 33.2402 8.95762C33.4875 9.20492 33.6264 9.54033 33.6264 9.89007C33.6264 10.2398 33.4875 10.5752 33.2402 10.8225C32.9929 11.0698 32.6574 11.2088 32.3077 11.2088Z" fill="url(#paint0_linear_390_11258)"/>
        <path d="M41.5377 8.57131V53.4065C41.5377 53.7562 41.3988 54.0916 41.1514 54.3389C40.9041 54.5862 40.5687 54.7252 40.219 54.7252H8.57063C8.2209 54.7252 7.88549 54.8641 7.63819 55.1114C7.39089 55.3587 7.25195 55.6941 7.25195 56.0439V58.6812C7.25195 59.031 7.39089 59.3664 7.63819 59.6137C7.88549 59.861 8.2209 59.9999 8.57063 59.9999H45.4937C45.8435 59.9999 46.1789 59.861 46.4262 59.6137C46.6735 59.3664 46.8124 59.031 46.8124 58.6812V8.57131C46.8124 8.22157 46.6735 7.88616 46.4262 7.63886C46.1789 7.39156 45.8435 7.25262 45.4937 7.25262H42.8564C42.5066 7.25262 42.1712 7.39156 41.9239 7.63886C41.6766 7.88616 41.5377 8.22157 41.5377 8.57131Z" fill="url(#paint1_linear_390_11258)"/>
        <defs>
            <linearGradient id="paint0_linear_390_11258" x1="40" y1="55.5" x2="-1.97471e-06" y2="-5.96119e-05" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ACB4C3"/>
                <stop offset="1" stopColor="#545962"/>
            </linearGradient>
            <linearGradient id="paint1_linear_390_11258" x1="42.5" y1="-5.50007" x2="43" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ACB4C3"/>
                <stop offset="1" stopColor="#545962"/>
            </linearGradient>
        </defs>
    </Icon>
);

export default WorksDone;
