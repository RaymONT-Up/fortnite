// for smooth scrolling
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// animate on scroll
AOS.init({
  disable: "phone",
  duration: 750,
  once: true,
});
//
(function () {
  const contactBtn = document.querySelector(".contactBtn ");
  const contactBtn2 = document.querySelector(".contactBtn_2 ");
  const contactForm = document.querySelector(".contactForm");
  const contactFormClose = document.querySelector(".contactForm__close");

  const privacyBtn = document.querySelector(".privacyBtn");
  const privacyInfo = document.querySelector(".privacyPolicy");
  const privacyClose = document.querySelector(".privacyPolicy__close");

  const termsBtn = document.querySelector(".termsBtn");
  const termsInfo = document.querySelector(".termsUse");
  const termsClose = document.querySelector(".termsUse__close");

  contactBtn.addEventListener("click", () => {
    contactForm.classList.toggle("contactForm_active");
  });
  contactBtn2.addEventListener("click", () => {
    contactForm.classList.toggle("contactForm_active");
  });
  contactFormClose.addEventListener("click", () => {
    contactForm.classList.toggle("contactForm_active");
  });

  privacyBtn.addEventListener("click", () => {
    privacyInfo.classList.toggle("privacyPolicy_active");
  });
  privacyClose.addEventListener("click", () => {
    privacyInfo.classList.toggle("privacyPolicy_active");
  });

  termsBtn.addEventListener("click", () => {
    termsInfo.classList.toggle("termsUse_active");
  });
  termsClose.addEventListener("click", () => {
    termsInfo.classList.toggle("termsUse_active");
  });
})();
