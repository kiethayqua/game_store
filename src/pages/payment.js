import React from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Paper,
    Divider
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { redirect } from "next/navigation";

const PaymentScreen = () => {
    // Formik for form handling
    const formik = useFormik({
        initialValues: {
            cardName: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
        },
        validationSchema: Yup.object({
            cardName: Yup.string().required("Tên chủ thẻ là bắt buộc"),
            cardNumber: Yup.string()
                .matches(/^[0-9]{16}$/, "Số thẻ phải là 16 chữ số")
                .required("Số thẻ là bắt buộc"),
            expiryDate: Yup.string()
                .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Ngày hết hạn phải có dạng MM/YY")
                .required("Ngày hết hạn là bắt buộc"),
            cvv: Yup.string()
                .matches(/^[0-9]{3}$/, "CVV phải là 3 chữ số")
                .required("CVV là bắt buộc"),
        }),
        onSubmit: (values) => {
            alert("Bạn đã thanh toán thành công số tiền 499.000VNĐ. Cảm ơn bạn đã sử dụng dịch vụ!");
            window.open('https://drive.google.com/drive/folders/14_6qcnRvAjODoeq4K-ty6u0LY07VWZ5d?usp=drive_link', "_blank", "noopener,noreferrer");
        },
    });

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400 }}>
                <Typography variant="h5" gutterBottom>
                    Thanh Toán
                </Typography>
                <Divider sx={{ my: 2 }} />
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Tên chủ thẻ"
                                name="cardName"
                                value={formik.values.cardName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                                helperText={formik.touched.cardName && formik.errors.cardName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Số thẻ"
                                name="cardNumber"
                                value={formik.values.cardNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                                helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Ngày hết hạn (MM/YY)"
                                name="expiryDate"
                                value={formik.values.expiryDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                                helperText={formik.touched.expiryDate && formik.errors.expiryDate}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="CVV"
                                name="cvv"
                                type="password"
                                value={formik.values.cvv}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                                helperText={formik.touched.cvv && formik.errors.cvv}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3 }}
                    >
                        Thanh toán ngay
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default PaymentScreen;
