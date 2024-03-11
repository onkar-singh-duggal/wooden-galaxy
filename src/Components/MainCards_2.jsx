import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
  } from "@mui/material";
  
  import McardData from "./McardData";
function MainCards2() {
  return (
    <div>
      <div class="w-full flex justify-center">
        <div class="w-full md:w-4/5 lg:w-8/12">
          <div class="grid grid-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 m-3">
            {McardData.map((cardData) => (
              <div
                key={cardData.id}
                class="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    class="object-fill h-full w-full"
                    image={cardData.imagescr}
                  />
                  <CardContent className="p-2 flex flex-col">
                    <Typography gutterBottom variant="small">
                      {cardData.heading}
                    </Typography>
                    <Typography gutterBottom variant="small">
                      {cardData.para}
                    </Typography>
                    <Typography gutterBottom variant="small">
                      {cardData.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCards2;
