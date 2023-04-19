// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RCTabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TabContent from 'rc-tabs/lib/TabContent';
import { ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import { FONT_MEDIUM } from '@components/atoms/Typography/Typography';

const StyledInkBar = styled(ScrollableInkTabBar)`
    border-bottom: 0 !important;
    margin-bottom: 40px;

    .rc-tabs-tab {
        background: transparent !important;
        color: ${({ theme }) => theme.colors.light.greyDark};
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        padding: 8px 10px;

        ${mediaQueries.tablet} {
            font-size: 24px;
            font-weight: ${FONT_MEDIUM};
        }
        margin-right: 0 !important;
    }

    .rc-tabs-tab-arrow-show {
        color: ${({ theme }) => theme.colors.light.greyDark};
        font-size: 24px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .rc-tabs-tab-btn-disabled {
        color: transparent;
    }

    .rc-tabs-tab .rc-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.light.greyDark};
        font-weight: normal;
    }

    .rc-tabs-tab.rc-tabs-tab-active {
        background: transparent;

        .rc-tabs-tab-btn {
            color: ${({ theme }) => theme.colors.light.accent};
        }
    }
    .rc-tabs-ink-bar {
        background: ${({ theme }) => theme.colors.light.accent} !important;
    }
    .rc-tabs-content-holder {
        background: transparent;
        margin-top: 80px;
    }
`;

const Tabs = ({ children }: { children: ReactElement | ReactElement[] }) => (
    <RCTabs
        animated={{ inkBar: true, tabPane: true }}
        renderTabBar={() => <StyledInkBar />}
        renderTabContent={() => <TabContent />}
    >
        {children}
    </RCTabs>
);

Tabs.Panel = TabPane;

export default Tabs;
