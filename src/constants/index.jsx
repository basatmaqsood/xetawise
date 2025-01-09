import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Swiift: South African Ride Sharing Platform", href: "https://swiift-basat.vercel.app/" },
      { title: "Wild and Free: Explore Events in Bali, Indonesia", href: "https://www.wildandfree.us/" },
      { title: "SnapGram: The NextGen Social Media Platform", href: "https://react-social-mediaapp.vercel.app/sign-in" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
