import {
  Box,
  Checkbox,
  Container,
  Grid,
  InputBase,
  Link,
  Slider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { _contact } from "api/contact/contact";
import * as yup from "yup";
import ButtonLoader from "components/customs/ButtonLoader";
import Swal from "sweetalert2";
import {
  KeyboardArrowDown,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { useContactUs } from "hooks/contactUs/useContactUs";
import Seo from "components/Seo";
import {  useScroll, useSpring, useTransform } from "framer-motion";
import { useDashboardContactFooterSetting } from "hooks/dashboard/useDashboardHomeContent";

import arrowUpRight from "assets/images/icons/gradientArrow.svg";
import star from "assets/images/icons/oStar.svg";

const clientTypes = [
  "End Client",
  "Agency",
  "Event Company",
  "Fabricator",
  "A/V Company",
  "Other",
];
const inputStyles = {
  border: "1px solid #D9D9D9",
  borderRadius: "12px",
  px: 2,
  py: 1.5,
  transition: "all 0.3s",
  color: "#fff",
  "&:hover": {
    borderColor: "#FF5B2E",
    background: "#fff",
    color: "#000",
  },
};
export default function ContactUs() {
  const [budget, setBudget] = useState(275);
  const [countryCode, setCountryCode] = useState("+966");

  let schema = yup.object().shape({
    first_name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    phone: yup.string().trim().required(),
    company_name: yup.string().trim(),
    client_type: yup.string().trim().required(),
    terms: yup.boolean().oneOf([true], "Agreement is required"),
    message: yup.string().trim().required(),
  });

  const formOptions = {
    resolver: yupResolver(schema),
    defaultValues: {
      client_type: "Agency",
      terms: false,
    },
  };

  const { register, handleSubmit, formState, watch, reset } = useForm(formOptions);

  const { errors } = formState;
  const selectedClientType = watch("client_type", "Agency");

  const { mutate, isLoading } = useMutation(
    (data) => _contact.post(data),
    {
      onSuccess: () => {
        reset();
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please try again or contact us directly.",
          showConfirmButton: false,
          timer: 2000,
        });
      },
    }
  );

  const { data: contactData } = useContactUs();
  const { data: dashboardContactData } = useDashboardContactFooterSetting();

  const contactInfo = contactData?.data?.[0] || {};
  const dashboardContactInfo = dashboardContactData?.data || {};
  const contactLinks = {
    email: dashboardContactInfo.email || contactInfo?.email || "",
    facebook: dashboardContactInfo.facebook_url || contactInfo?.facebook || "#",
    instagram:
      dashboardContactInfo.instagram_url || contactInfo?.instagram || "#",
    linkedin: dashboardContactInfo.linkedin_url || contactInfo?.linkedin || "#",
    whatsapp: dashboardContactInfo.whatsapp || contactInfo?.whatsapp || "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCreate = (input) => {
    mutate({
      ...input,
      country_code: countryCode,
      budget_range: `AED ${budget}K`,
    });
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
        title=""
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
            <Grid item xs={12} md={4}>
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
                    href={`mailto:${contactLinks.email}`}
                    target="_blank"
                  >
                    <Email sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactLinks.facebook} target="_blank">
                    <Facebook sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactLinks.instagram} target="_blank">
                    <Instagram sx={{ color: "#fff" }} />
                  </Link>

                  <Link href={contactLinks.linkedin} target="_blank">
                    <LinkedIn sx={{ color: "#fff" }} />
                  </Link>

                  <Link
                    href={
                      contactLinks.whatsapp
                        ? `https://wa.me/${contactLinks.whatsapp}`
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
            <Grid item xs={12} md={8}>
              <Box
                component="form"
                onSubmit={handleSubmit(handleCreate)}
                sx={{
                  background:"#00000015",
                  // border: "1px solid rgba(255, 91, 46, 0.18)",
                  backdropFilter: "blur(25px)",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 3, md: 4 },
                  color: "#fff",
                  fontFamily: "gilroy, sans-serif",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
                  borderRadius: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: { xs: 2, md: 2.2 },
                  }}
                >
                  <Box>
                    <InputBase
                      placeholder="Full Name*"
                      fullWidth
                      {...register("first_name")}
                      sx={inputStyles}
                    />
                    {errors?.first_name && (
                      <Typography sx={{ color: "text.primary", fontSize: "13px", mt: 0.75 }}>
                        {errors?.first_name?.message}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <InputBase
                      placeholder="Email*"
                      fullWidth
                      {...register("email")}
                      sx={inputStyles}
                    />
                    {errors?.email && (
                      <Typography sx={{ color: "text.primary", fontSize: "13px", mt: 0.75 }}>
                        {errors?.email?.message}
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "112px 1fr", md: "140px 1fr" },
                      gap: { xs: 1.25, md: 1.6 },
                    }}
                  >
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setCountryCode((value) => (value === "+966" ? "+971" : "+966"))}
                      sx={{
                        ...inputStyles,
                        width: "100%",
                        border: 0,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: 700,
                      }}
                    >
                      <Box component="span">{countryCode}</Box>
                      <Box
                        component="span"
                        sx={{
                          width: 27,
                          height: 18,
                          borderRadius: "2px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: countryCode === "+966" ? "#006c35" : "#00732f",
                          fontSize: 10,
                          lineHeight: 1,
                        }}
                      >
                        {countryCode === "+966" ? "SA" : "AE"}
                      </Box>
                      <KeyboardArrowDown sx={{ fontSize: 20, color: "rgba(255,255,255,0.72)" }} />
                    </Box>
                    <InputBase
                      placeholder="Phone*"
                      fullWidth
                      {...register("phone")}
                      sx={inputStyles}
                    />
                  </Box>
                  <InputBase
                    placeholder="Company Name"
                    fullWidth
                    {...register("company_name")}
                    sx={inputStyles}
                  />
                </Box>

                {errors?.phone && (
                  <Typography sx={{ color: "text.primary", fontSize: "13px", mt: 0.75 }}>
                    {errors?.phone?.message}
                  </Typography>
                )}

                <Box
                  sx={{
                    mt: { xs: 2.5, md: 2.2 },
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: { xs: 1.4, md: 2 },
                  }}
                >
                  {clientTypes.map((type) => (
                    <Box
                      component="label"
                      key={type}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#fff",
                        fontSize: { xs: "0.93rem", md: "1rem" },
                        fontWeight: 700,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Box
                        component="input"
                        type="radio"
                        value={type}
                        {...register("client_type")}
                        sx={{ display: "none" }}
                      />
                      <Box
                        component="span"
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "rgba(255, 91, 46, 0.22)",
                          boxShadow:
                            selectedClientType === type
                              ? "inset 0 0 0 4px rgba(65, 25, 14, 0.95), inset 0 0 0 7px #FE572A, 0 0 0 2px rgba(254, 87, 42, 0.26)"
                              : "none",
                        }}
                      />
                      {type}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: { xs: 2.75, md: 2.5 } }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr",
                      alignItems: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>AED 50K</Typography>
                    <Typography sx={{ fontWeight: 700 }}>Budget Range</Typography>
                    <Typography sx={{ fontWeight: 700, textAlign: "right" }}>
                      AED 500K
                    </Typography>
                  </Box>
                  <Slider
                    value={budget}
                    min={50}
                    max={500}
                    step={5}
                    onChange={(_, value) => setBudget(value)}
                    aria-label="Budget Range"
                    sx={{
                      mt: 1.1,
                      height: 9,
                      color: "#FE572A",
                      "& .MuiSlider-rail": {
                        opacity: 0.5,
                        backgroundColor: "rgba(255, 255, 255, 0.18)",
                      },
                      "& .MuiSlider-track": {
                        border: 0,
                      },
                      "& .MuiSlider-thumb": {
                        width: 26,
                        height: 26,
                        backgroundColor: "#FE572A",
                        boxShadow: "0 4px 18px rgba(254, 87, 42, 0.34)",
                        "&:before": {
                          boxShadow: "none",
                        },
                      },
                    }}
                  />
                </Box>

                <InputBase
                  placeholder="Please Enter your project details"
                  fullWidth
                  multiline
                  minRows={5}
                  {...register("message")}
                  sx={{
                    ...inputStyles,
                    mt: { xs: 2.25, md: 2.5 },
                    alignItems: "flex-start",
                  }}
                />
                {errors?.message && (
                  <Typography sx={{ color: "text.primary", fontSize: "13px", mt: 0.75 }}>
                    {errors?.message?.message}
                  </Typography>
                )}

                <Box
                  component="label"
                  sx={{
                    mt: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#fff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Checkbox
                    {...register("terms")}
                    sx={{
                      width: 20,
                      height: 20,
                      p: 0,
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#FE572A",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 23,
                        borderRadius: "4px",
                      },
                    }}
                  />
                  <Box component="span">
                    I have read the{" "}
                    <Box component="span" sx={{ color: "#FE572A" }}>
                      Terms and Condition
                    </Box>{" "}
                    &{" "}
                    <Box component="span" sx={{ color: "#FE572A" }}>
                      Privacy Notice
                    </Box>{" "}
                    agreement
                  </Box>
                </Box>
                {errors?.terms && (
                  <Typography sx={{ color: "text.primary", fontSize: "13px", mt: 0.75 }}>
                    {errors?.terms?.message}
                  </Typography>
                )}

                <Box sx={{ mt: 3.5 }}>
                  <ButtonLoader
                    loading={isLoading}
                    disabled={isLoading}
                    variant="contained"
                    type="submit"
                    sx={{
                      background: "#FF5B2E",
                      borderRadius: "7px",
                      px: 2.4,
                      py: 1.1,
                      fontWeight: 700,
                      textTransform: "none",
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
      </Box>
    </>
  );
}
