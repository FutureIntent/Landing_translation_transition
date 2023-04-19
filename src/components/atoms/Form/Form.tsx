import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'gatsby';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
} from 'react-netlify-forms';
import * as yup from 'yup';

import Box from '@components/atoms/Box';
import Checkbox from '@components/atoms/Form/Checkbox/Checkbox';
import Input from '@components/atoms/Form/Input/Input';
import Terms from '@components/atoms/Form/Terms';
import TextArea from '@components/atoms/Form/TextArea';
import Typography from '@components/atoms/Typography';

import ActionButton from '@components/molecules/ActionButton';

const defaultValues = {
    name: '',
    email: '',
    message: '',
    policy: false,
};

const Form = ({
    fullWidthBtn = false,
    subTitle,
}: {
    fullWidthBtn?: boolean;
    subTitle?: string;
}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const schema = yup.object().shape({
        email: yup
            .string()
            .required(`Please provide your email`)
            .email('Please provide a valid email address'),
        message: yup
            .string()
            .transform((x) => (x === '' ? undefined : x))
            .required('Please provide a message'),
        agreement: yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
    });
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });
    const netlify = useNetlifyForm({
        name: 'contact',
        honeypotName: 'bot-field',
    });

    const onSubmit = (data: any) => {
        netlify.handleSubmit(null, data);
        setIsSubmitted(true);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (gtag) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            gtag('event', 'conversion', { send_to: 'AW-11066226844/mmUcCJ_v84gYEJzx5Jwp' });
        }

        reset(defaultValues);
    };

    if (isSubmitted) {
        return (
            <Box height="100%">
                <Typography variant="h2" color="commons.white" mb={60}>
                    THANK YOU!
                </Typography>

                <Typography variant="h4" color="light.success" mb={60}>
                    Message sent successfully. We’ll contact you as soon as possible!
                </Typography>

                <ActionButton
                    label="Send another"
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onClick={() => setIsSubmitted(false)}
                    withArrow
                    fullWidth
                />
            </Box>
        );
    }

    return (
        <>
            {subTitle && (
                <Typography
                    variant="accent"
                    as="p"
                    color="light.grey"
                    transformText="uppercase"
                    pl="1rem"
                    mb="calc(50px - 1rem)"
                >
                    {subTitle}
                </Typography>
            )}
            <NetlifyFormProvider {...netlify}>
                <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                    <Honeypot />
                    <Box display="flex" flexDirection="column" gridGap={30} p="1rem">
                        <Box
                            display="grid"
                            gridGap={30}
                            justifyContent="space-between"
                            gridTemplateColumns="repeat(auto-fit, minMax(250px, 1fr))"
                        >
                            <>
                                <Input
                                    {...register('name')}
                                    type="text"
                                    label="Name"
                                    error={errors?.name?.message as string}
                                />
                                <Input
                                    {...register('email')}
                                    type="email"
                                    label="E-mail"
                                    error={errors?.email?.message as string}
                                />
                            </>
                        </Box>
                        <TextArea
                            {...register('message')}
                            label="Message"
                            error={errors?.message?.message as string}
                        />
                        <Box
                            display="flex"
                            justifyContent={{ _: 'center', tablet: 'space-between' }}
                            flexWrap="wrap"
                            gridGap={20}
                        >
                            <Box display="flex">
                                <Checkbox inputName="agreement" control={control} />
                                <Terms>
                                    I agree that my personal data is processed in accordance with
                                    THEC{' '}
                                    <Link to="/privacy-policy">
                                        <span>Privacy Policy</span>
                                    </Link>
                                </Terms>
                            </Box>
                            <ActionButton
                                label="Send message"
                                withArrow
                                fullWidth={fullWidthBtn}
                                type="submit"
                            />
                        </Box>
                    </Box>
                </NetlifyFormComponent>
            </NetlifyFormProvider>
        </>
    );
};

export default Form;
