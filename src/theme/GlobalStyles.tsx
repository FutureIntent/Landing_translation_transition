import { getClampValue } from '@utils/helpers';
import { createGlobalStyle } from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import breakpoints from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

import { APPARAT_FONT_FAMILY, fontsConfig } from '@components/atoms/Typography/Typography';

const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: ${getClampValue('50px', '60px', breakpoints.desktop)};
        --footer-height: 328px;
        --container-padding-x: 15px;
        --container-nav-space: 42px;

        ${mediaQueries.tablet} {
            --footer-height: 250px;
            --container-padding-x: 24px;
            --container-nav-space: 90px;
        }

        ${mediaQueries.laptopS} {
            --container-padding-x: 32px;
            --container-nav-space: 110px;
        }
        ${mediaQueries.laptop} {
            --container-padding-x: 45px;
            --container-nav-space: 130px;
        }
    }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${APPARAT_FONT_FAMILY}, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.body : theme.colors.dark.body};
  }

  body.no-scroll {
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea, select, input {
    outline: unset;
    border: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;

    &:disabled {
      opacity: 32%;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;

    svg {
      vertical-align: middle;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .lightbox-container {
      background: rgba(39, 39, 39, 0.5);
      pointer-events: all;
  }

  .ant-tabs-tab {
        color: ${({ theme }) => theme.colors.light.greyDark};
        text-transform: uppercase;
      padding: 0.5rem 0!important;

        margin-right: 0 !important;
    }

    .ant-tabs-tab:not(.ant-tabs-tab-active) {
        background: transparent !important;
    }

    .ant-tabs-tab-arrow-show {
        color: ${({ theme }) => theme.colors.light.greyDark};
        font-size: 24px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ant-tabs-tab-btn-disabled {
        color: transparent;
    }

    .ant-tabs-tab .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.light.greyDark};
        //font-weight: normal;
        ${{ ...fontsConfig.h4 }};
    }

    .ant-tabs-tab.ant-tabs-tab-active {
        background: transparent;
        color: ${({ theme }) => theme.colors.light.accent}!important;
    }
    .ant-tabs-ink-bar {
        background: ${({ theme }) => theme.colors.light.accent} !important;
    }
    .ant-tabs-content-holder {
        background: transparent;
        margin-top: 30px;

        ${mediaQueries.tablet} {
            margin-top: 80px;
        }
    }

    .ant-tabs-nav-operations {
        display: none!important;
    }
`;

export default GlobalStyle;
