export const animateScroll = ()=> {
    const elements = document.querySelectorAll(".animate-on-scroll");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    };
