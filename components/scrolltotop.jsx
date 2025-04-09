import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#e3b843",
        padding: " 20px",
        borderRadius: "50%",
        border: "none",
        display: isVisible ? "block" : "none", 
        cursor: "pointer",
        fontSize: "20px",
        color: "white", 
        zIndex: 1000,
        transition: "transform 0.3s ease", 
         ariaLabel:"Scroll to top button"
      }}
      onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"} 
      onMouseLeave={(e) => e.target.style.transform = "scale(1)"} 
    >
      <ArrowUp size={24} color="white" /> 
    </button>
  );
};

export default ScrollToTopButton;
