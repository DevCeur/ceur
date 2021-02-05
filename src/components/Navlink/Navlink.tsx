import { useRouter } from "next/router";
import { Link } from "@chakra-ui/react";

interface INavlink {
  href: string;
  hideOnMobile?: boolean;
}

const Navlink: React.FC<INavlink> = ({ children, href, hideOnMobile }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      px={4}
      py={2}
      _focus={{ outline: 0 }}
      _hover={{
        textDecor: "none",
        color: router.pathname === href ? "cyan.900" : "cyan.800",
        bgColor: router.pathname === href ? "cyan.100" : "cyan.50",
      }}
      href={href}
      onClick={handleClick}
      fontWeight="medium"
      bgColor={router.pathname === href ? "cyan.50" : "transparent"}
      color={router.pathname === href ? "cyan.800" : "gray.500"}
      borderRadius="lg"
      display={{
        base: hideOnMobile ? "none" : "inline-block",
        md: "inline-block",
      }}
    >
      {children}
    </Link>
  );
};

export default Navlink;
