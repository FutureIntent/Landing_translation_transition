import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';
import Layout from '@components/templates/Layout';
import Header from '@components/templates/Header';
import { graphql } from 'gatsby';

export const GradientBg = styled.div`
    background: ${({ theme }) => theme.colors.gradient.background};
    overflow: hidden;
    padding-bottom: var(--footer-height);
    position: relative;

    a {
        position: relative;

        &:after {
            background-color: ${({ theme }) => theme.colors.light.grey};
            bottom: 0;
            content: '';
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
        }
    }

    li {
        color: ${({ theme }) => theme.colors.light.grey};
        list-style: '—';
        margin: 10px 0 10px 10px;
        padding-left: 10px;
        ${{ ...fontsConfig.paragraph }};

        &:last-of-type {
            margin-bottom: 30px;
        }
    }
`;

const PrivacyPolicy = () => (
    <Layout>
        <Header />
        <GradientBg>
            <Box mt={220}>
                <Container>
                    <Typography variant="h2" as="h1" color="light.grey" textAlign="center" mb={60}>
                        Privacy Policy for ADVERTIMO
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        At ADVERTIMO, accessible from https://advertimo.eu, one of our main priorities
                        is the privacy of our visitors. This Privacy Policy document contains types of
                        information that is collected and recorded by ADVERTIMO and how we use it.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        If you have additional questions or require more information about our Privacy
                        Policy, do not hesitate to contact us.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        This Privacy Policy applies only to our online activities and is valid for
                        visitors to our website with regards to the information that they shared and/or
                        collect in ADVERTIMO. This policy is not applicable to any information collected
                        offline or via channels other than this website.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Consent
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its
                        terms.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Information we collect
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The personal information that you are asked to provide, and the reasons why you
                        are asked to provide it, will be made clear to you at the point we ask you to
                        provide your personal information.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        If you contact us directly, we may receive additional information about you such
                        as your name, email address, phone number, the contents of the message and/or
                        attachments you may send us, and any other information you may choose to
                        provide.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        When you register for an Account, we may ask for your contact information,
                        including items such as name, company name, address, email address, and
                        telephone number.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        How we use your information
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        We use the information we collect in various ways, including to:
                    </Typography>

                    <Box as="ul" mb={60}>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>
                            Communicate with you, either directly or through one of our partners,
                            including for customer service, to provide you with updates and other
                            information relating to the website, and for marketing and promotional
                            purposes
                        </li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </Box>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Log Files
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        ADVERTIMO follows a standard procedure of using log files. These files log
                        visitors when they visit websites. All hosting companies do this and a part of
                        hosting services&apos; analytics. The information collected by log files include
                        internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                        date and time stamp, referring/exit pages, and possibly the number of clicks.
                        These are not linked to any information that is personally identifiable. The
                        purpose of the information is for analyzing trends, administering the site,
                        tracking users&apos; movement on the website, and gathering demographic
                        information.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Cookies and Web Beacons
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Like any other website, ADVERTIMO uses &apos;cookies&apos;. These cookies are
                        used to store information including visitors&apos; preferences, and the pages on
                        the website that the visitor accessed or visited. The information is used to
                        optimize the users&apos; experience by customizing our web page content based on
                        visitors&apos; browser type and/or other information.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Advertising Partners Privacy Policies
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        You may consult this list to find the Privacy Policy for each of the advertising
                        partners of ADVERTIMO.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Third-party ad servers or ad networks uses technologies like cookies,
                        JavaScript, or Web Beacons that are used in their respective advertisements and
                        links that appear on ADVERTIMO, which are sent directly to users&apos; browser.
                        They automatically receive your IP address when this occurs. These technologies
                        are used to measure the effectiveness of their advertising campaigns and/or to
                        personalize the advertising content that you see on websites that you visit.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Note that ADVERTIMO has no access to or control over these cookies that are used
                        by third-party advertisers.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Third Party Privacy Policies
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        ADVERTIMO&apos;s Privacy Policy does not apply to other advertisers or websites.
                        Thus, we are advising you to consult the respective Privacy Policies of these
                        third-party ad servers for more detailed information. It may include their
                        practices and instructions about how to opt-out of certain options.{' '}
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        You can choose to disable cookies through your individual browser options. To
                        know more detailed information about cookie management with specific web
                        browsers, it can be found at the browsers&apos; respective websites.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        CCPA Privacy Rights (Do Not Sell My Personal Information)
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Under the CCPA, among other rights, California consumers have the right to:
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Request that a business that collects a consumer&apos;s personal data disclose
                        the categories and specific pieces of personal data that a business has
                        collected about consumers.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Request that a business delete any personal data about the consumer that a
                        business has collected.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Request that a business that sells a consumer&apos;s personal data, not sell the
                        consumer&apos;s personal data.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        If you make a request, we have one month to respond to you. If you would like to
                        exercise any of these rights, please contact us.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        GDPR Data Protection Rights
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        We would like to make sure you are fully aware of all of your data protection
                        rights. Every user is entitled to the following:
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to access – You have the right to request copies of your personal
                        data. We may charge you a small fee for this service.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to rectification – You have the right to request that we correct any
                        information you believe is inaccurate. You also have the right to request that
                        we complete the information you believe is incomplete.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to erasure – You have the right to request that we erase your personal
                        data, under certain conditions.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to restrict processing – You have the right to request that we
                        restrict the processing of your personal data, under certain conditions.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to object to processing – You have the right to object to our
                        processing of your personal data, under certain conditions.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        The right to data portability – You have the right to request that we transfer
                        the data that we have collected to another organization, or directly to you,
                        under certain conditions.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        If you make a request, we have one month to respond to you. If you would like to
                        exercise any of these rights, please contact us.
                    </Typography>

                    <Typography variant="h3" color="light.grey" mb={30}>
                        Children&apos;s Information
                    </Typography>

                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        Another part of our priority is adding protection for children while using the
                        internet. We encourage parents and guardians to observe, participate in, and/or
                        monitor and guide their online activity.
                    </Typography>
                    <Typography variant="paragraph" color="light.grey" mb={15}>
                        ADVERTIMO does not knowingly collect any Personal Identifiable Information from
                        children under the age of 13. If you think that your child provided this kind of
                        information on our website, we strongly encourage you to contact us immediately
                        and we will do our best efforts to promptly remove such information from our
                        records.
                    </Typography>
                </Container>
            </Box>
        </GradientBg>
    </Layout>
);

export default PrivacyPolicy;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["privacy", "header"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;