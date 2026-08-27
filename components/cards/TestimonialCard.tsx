import testimonialReviewData from "@/constants/testimonial_reviewData";
import { styles } from "@/styles/styles";
import { Avatar, Box, Card, Typography } from "@mui/material";

export function TestimonialCard({ quote, name, role, initials, color }: typeof testimonialReviewData[0]) {
    return (
        <Card sx={{ ...styles.glassOutlinedDark, gap: 2, p: "2rem 2rem", width: 375 }}>
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={color}>
                        <path d="M7 1l1.545 3.09 3.455.5-2.5 2.41.59 3.41L7 8.77l-3.09 1.64.59-3.41L2 4.59l3.455-.5z" />
                    </svg>
                ))}
            </div>
            <Typography variant="body1" color="textPrimary"  sx={{lineHeight:1.3 }}>&ldquo;{quote}&rdquo;</Typography>
            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-black/5">

                <Avatar sx={{ bgcolor: color, width: 32, height: 32, fontSize:"12px"
                    

                 }}>{initials}</Avatar>
                {/* <Typography
          className="w-8 h-8 rounded-full flex items-center justify-center  text-xs font-semibold flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </Typography> */}
                <div>
                    <Typography className="text-xs font-semibold">{name}</Typography>
                    <p className="text-[11px] text-[#9a8f85]">{role}</p>
                </div>
            </div>
        </Card>
    );
}