import { Container, Box, TextField, CircularProgress, Button, Snackbar, Alert } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "./ContactFormV2.module.scss";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email('Invalid email address')
        .required("Email is required"),
    message: Yup.string().required("Message is required"),

});

const ContactUsForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState<boolean>(Boolean(false));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        console.log(event)

        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };


    const formik = useFormik({
        initialValues: {
            name: '',  // Set initial values
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (value, { resetForm }) => {
            setIsLoading(true);
            const template = {
                name: value.name,
                email: value.email,
                message: value.message
            }

            setTimeout(() => {
                emailjs.send('service_cqyvp1v', 'template_tqfks4b', template, 'udOYgUd8C8i8oeqN6').then((res) => {
                    if (res.status === 200) {
                        handleOpen();
                        resetForm();
                        setIsLoading(false); 
                    }
                }).catch((error) => {
                    console.error("Error sending email:", error);
                    alert("Failed to send message");
                    setIsLoading(false);
                });
            }, 3000);  // Simulate a delay of 3 seconds (3000ms)
        },
    });
    return (
        <>
            <Container>
                <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}>

                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}
                        variant="filled">

                        Message sent successfully
                    </Alert>
                </Snackbar>
                <span className={styles.t1}> Get in touch </span>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <Box sx={{ mt: '20px', mb: '40px' }}>
                        <TextField
                            fullWidth
                            id="name"
                            label="NAME"
                            size="small"
                            sx={{
                                mb: '30px',
                                backgroundColor: 'rgb(26,26,26)',
                                borderRadius: '10px',
                                border: '2px solid rgb(31,31,31)',
                                '& .MuiInputBase-root': {
                                    border: '2px solid rgb(31,31,31)', 
                                    borderRadius: '10px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white', // White text color
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(72,72,72,255)', // Label color
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(154, 198, 250)',
                                    },
                                },
                            }}

                            {...formik.getFieldProps('name')}
                            error={
                                formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <div className={styles.EmailRegister}>
                            <TextField
                                fullWidth
                                id="email"
                                label="EMAIL"
                                size="small"
                                sx={{
                                    mb: '30px',
                                    backgroundColor: 'rgb(26,26,26)',
                                    borderRadius: '10px',
                                    border: '2px solid rgb(31,31,31)',
                                    '& .MuiInputBase-root': {
                                        borderRadius: '10px',
                                        border: '2px solid rgb(31,31,31)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white', // White text color
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'rgba(72,72,72,255)', // Label color
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'rgb(154, 198, 250)',
                                        },
                                    },
                                }}


                                {...formik.getFieldProps('email')}
                                error={
                                    formik.touched.email && Boolean(formik.errors.email)
                                }
                                helperText={formik.touched.email && formik.errors.email}
                            />

                        </div>
                        <TextField
                            fullWidth
                            id="message"
                            label="MESSAGE"
                            size="small"
                            multiline
                            variant="outlined"
                            rows={5}
                            sx={{
                                mb: '30px',
                                backgroundColor: 'rgb(26,26,26)',
                                borderRadius: '10px',
                                border: '2px solid rgb(31,31,31)',
                                '& .MuiInputBase-root': {
                                    border: '2px solid rgb(31,31,31)', // Default border color
                                    borderRadius: '10px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white', // White text color
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(72,72,72,255)', // Label color
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(154, 198, 250)',
                                    },
                                },
                            }}

                            {...formik.getFieldProps('message')}
                            error={
                                formik.touched.message && Boolean(formik.errors.message)
                            }
                            helperText={formik.touched.message && formik.errors.message}
                        />
                        {isLoading ? (
                            <Button variant="contained" type="submit" color="primary" sx={{ mt: 3, mb: 10 }} disabled>
                                <CircularProgress size={24} sx={{ color: 'white', mr: 2 }} />
                                Loading...
                            </Button>
                        ) : (
                            <button className={styles.submitButton}>Send Message</button>
                        )}
                    </Box>
                </form>

            </Container>
        </>
    );
};

export default ContactUsForm;
