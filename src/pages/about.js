import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

const teamMembers = [
    {
        name: "Kiệt Nguyễn (Steve)",
        role: "Developer",
        avatar: "https://via.placeholder.com/150", // Replace with actual avatar URL
        description: "A Fullstack software engineer with a passion for mobile app development",
    },
    {
        name: "Kim Ngân",
        role: "Developer",
        avatar: "https://via.placeholder.com/150", // Replace with actual avatar URL
        description: "",
    },
    {
        name: "Dũng Nguyễn",
        role: "Developer",
        avatar: "https://via.placeholder.com/150", // Replace with actual avatar URL
        description: "",
    },
];

const AboutUs = () => {
    return (
        <Box
            sx={{
                px: 4,
                py: 8,
                backgroundColor: "#f5f5f5",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Về chúng tôi
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Chúng tôi cam kết cung cấp trải nghiệm tốt nhất cho người dùng.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card elevation={3} sx={{ borderRadius: 2 }}>
                            <CardContent>
                                <Avatar
                                    alt={member.name}
                                    src={member.avatar}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {member.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutUs;
