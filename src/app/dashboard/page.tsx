import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Box, Typography } from "@mui/material";

const Dashboard = async () => {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        redirect("/login");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Box>
                <img src={user?.image} alt={user?.name} />
                <Typography variant="h5" color="initial">
                    {user?.name}
                </Typography>
                <Typography variant="h6" color="initial">
                    {user?.email}
                </Typography>
                <Typography variant="h6" color="initial">
                    {user?.id}
                </Typography>
            </Box>
        </div>
    );
};

export default Dashboard;
