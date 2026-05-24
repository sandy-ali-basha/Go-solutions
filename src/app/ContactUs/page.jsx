import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { _contact } from "api/contact/contact";
import * as yup from "yup";
import ButtonLoader from "components/customs/ButtonLoader";
import Swal from "sweetalert2";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { useContactUs } from "hooks/contactUs/useContactUs";
import Seo from "components/Seo";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import arrowUpRight from "assets/images/icons/gradientArrow.svg";
import logo from "assets/images/Logo.svg";
import star from "assets/images/icons/oStar.svg";

const inputStyles = {
  border: "1px solid #D9D9D9",
  borderRadius: "12px",
  px: 2,
  py: 1,
  transition: "all 0.3s",
  color: "#fff",
  "&:hover": {
    borderColor: "#FF5B2E",
    background: "#fff",
    color: "#000",
  },
};
export default function ContactUs() {
  let schema = yup.object().shape({
    first_name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    message: yup.string().trim().required(),
  });

  const formOptions = { resolver: yupResolver(schema) };

  const { register, handleSubmit, formState } = useForm(formOptions);

  const { errors } = formState;

  const { mutate } = useMutation((data) => createPost(data));

  const { data: contactData } = useContactUs();

  const contactInfo = contactData?.data?.[0] || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function createPost(data) {
    try {
      await _contact.post(data);

      Swal.fire({
        icon: "success",
        title: "Message Sent",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const hanldeCreate = (input) => {
    mutate(input);
  };

  // scroll speed effect
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
  });

  const x1 = useTransform(smoothScroll, [0, 1000], [0, -260], {
    clamp: false,
  });
  const x2 = useTransform(smoothScroll, [0, 1000], [-260, 0], {
    clamp: false,
  });

  const logos = Array.from({ length: 24 });
  const movingLogoItemSx = {
    display: "flex",
    alignItems: "center",
    gap: { xs: 1.25, sm: 2, md: 3 },
    flex: "0 0 auto",
    minWidth: "max-content",
  };
  const movingLogoSx = {
    display: "block",
    flex: "0 0 auto",
    width: { xs: 132, sm: 158, md: 208 },
    height: "auto",
  };
  const movingArrowSx = {
    display: "block",
    flex: "0 0 auto",
    width: { xs: 58, sm: 78, md: 120 },
    height: { xs: 58, sm: 78, md: 120 },
    objectFit: "contain",
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Go Creative Solutions"
        keywords="contact"
      />

      <Box
        sx={{
          minHeight: "100dvh",
          overflow: "hidden",
          position: "relative",
          pt: { xs: 6, md: 10 },
          pb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* LEFT */}
            <Grid item xs={12} md={7}>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem" } }}>
                Lets{" "}
                <Box
                  component={"img"}
                  sx={{ width: { xs: "2rem" } }}
                  src={star}
                ></Box>
                <br />
                Get In Touch
              </Typography>

              <Box sx={{ mt: 10 }}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    fontWeight: 300,
                    fontFamily: "gilroy, sans-serif",
                  }}
                >
                  Contact With
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ letterSpacing: "0.02em", fontSize: { xs: "2rem" } }}
                >
                  Go CREA
                  <Box
                    component={"img"}
                    sx={{ rotate: "-90deg", width: "2rem" }}
                    src={arrowUpRight}
                  ></Box>
                  IVE SOLUTI
                  <Box
                    component={"img"}
                    sx={{ width: "2rem" }}
                    src={star}
                  ></Box>
                  NS
                </Typography>
                {/* SOCIALS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Link
                    href={`mailto:${contactInfo?.email || ""}`}
                    target="_blank"
                  >
                    <Email sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactInfo?.facebook || "#"} target="_blank">
                    <Facebook sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactInfo?.instagram || "#"} target="_blank">
                    <Instagram sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactInfo?.linkedin || "#"} target="_blank">
                    <LinkedIn sx={{ color: "#fff" }} />
                  </Link>

                  <Link
                    href={
                      contactInfo?.whatsapp
                        ? `https://wa.me/${contactInfo.whatsapp}`
                        : "#"
                    }
                    target="_blank"
                  >
                    <WhatsApp sx={{ color: "#fff" }} />
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} md={5}>
              <Box component="form" onSubmit={handleSubmit(hanldeCreate)}>
                <Typography
                  sx={{
                    color: "#fff",
                    mb: 1,
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  NAME
                </Typography>

                <InputBase
                  placeholder="Your name"
                  fullWidth
                  {...register("first_name")}
                  sx={inputStyles}
                />
                {errors?.first_name && (
                  <Typography
                    sx={{
                      color: "#ff6b6b",
                      fontSize: "13px",
                      mt: 1,
                    }}
                  >
                    {errors?.first_name?.message}
                  </Typography>
                )}
                <Typography
                  sx={{
                    color: "#fff",
                    mb: 1,
                    mt: 4,
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  EMAIL
                </Typography>
                <InputBase
                  placeholder="Email@website.com"
                  fullWidth
                  {...register("email")}
                  sx={inputStyles}
                />

                {errors?.email && (
                  <Typography
                    sx={{
                      color: "#ff6b6b",
                      fontSize: "13px",
                      mt: 1,
                    }}
                  >
                    {errors?.email?.message}
                  </Typography>
                )}

                <Typography
                  sx={{
                    color: "#fff",
                    mb: 1,
                    mt: 4,
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  MESSAGE
                </Typography>

                <InputBase
                  placeholder="Type your message..."
                  fullWidth
                  multiline
                  minRows={6}
                  {...register("message")}
                  sx={{
                    ...inputStyles,
                    alignItems: "flex-start",
                  }}
                />

                {errors?.message && (
                  <Typography
                    sx={{
                      color: "#ff6b6b",
                      fontSize: "13px",
                      mt: 1,
                    }}
                  >
                    {errors?.message?.message}
                  </Typography>
                )}

                <Box sx={{ mt: 4 }}>
                  <ButtonLoader
                    loading={false}
                    disabled={false}
                    variant="contained"
                    type="submit"
                    sx={{
                      background: "#FF5B2E",
                      borderRadius: "999px",
                      px: 5,
                      py: 1.3,
                      fontWeight: 700,
                      boxShadow: "none",

                      "&:hover": {
                        background: "#ff744f",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Submit
                  </ButtonLoader>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* BOTTOM MOVING LOGOS */}
        <Box
          sx={{
            mt: 20,
            width: "100%",
            overflow: "hidden",
            py: 2,
          }}
        >
          {/* ROW 1 */}
          <motion.div
            style={{
              display: "flex",
              gap: "clamp(18px, 5vw, 40px)",
              x: x1,
              marginBottom: "20px",
              width: "max-content",
            }}
          >
            {logos.map((_, index) => (
              <Box key={index} sx={movingLogoItemSx}>
                <Box
                  component="img"
                  src={logo}
                  alt=""
                  sx={movingLogoSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={movingArrowSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={{
                    ...movingArrowSx,
                    transform: "rotate(180deg)",
                  }}
                />
                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={movingArrowSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={{
                    ...movingArrowSx,
                    transform: "rotate(180deg)",
                  }}
                />
              </Box>
            ))}
          </motion.div>

          {/* ROW 2 */}
          <motion.div
            style={{
              display: "flex",
              gap: "clamp(18px, 5vw, 40px)",
              x: x2,
              justifyContent: "flex-end",
              width: "max-content",
            }}
          >
            {logos.map((_, index) => (
              <Box key={index} sx={movingLogoItemSx}>
                <Box
                  component="img"
                  src={logo}
                  alt=""
                  sx={movingLogoSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={movingArrowSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={{
                    ...movingArrowSx,
                    transform: "rotate(180deg)",
                  }}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={movingArrowSx}
                />

                <Box
                  component="img"
                  src={arrowUpRight}
                  alt=""
                  sx={{
                    ...movingArrowSx,
                    transform: "rotate(180deg)",
                  }}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
